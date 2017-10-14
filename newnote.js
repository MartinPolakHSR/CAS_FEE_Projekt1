var savedNotes = sessionStorage.getItem("notes");
if (!savedNotes) {
    sessionStorage.setItem("notes", JSON.stringify([]));
    savedNotes = sessionStorage.getItem("notes");
}
savedNotes = JSON.parse(savedNotes);

function createNewNote(id){




    var newNote = new Object();
    var notes;

    newNote.id = getLastID();
    newNote.title = $("#title").val();
    newNote.description = $("#description").val();
    newNote.untildate = $("#untildate").val();

    if(sessionStorage.notes)
    {
        notes= JSON.parse(sessionStorage.getItem('notes'));
    }else{
        notes=[];
    }

    notes.push(newNote);


    sessionStorage.setItem('notes', JSON.stringify(notes));

    window.location.replace("index.html");


};


function getLastID(){

    var maxID = 0;

    if (savedNotes) {

        for (var i = 0; i < savedNotes.length; i++) {
            if (savedNotes[i].id > maxID) {
                maxID = savedNotes[i].id;
            }
            ;
        }

        return maxID + 1;
    } else {
        return 0;
    }
};