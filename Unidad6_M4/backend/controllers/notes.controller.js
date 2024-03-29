// import Note from "../public/models/noticia";

const Note = require('../public/models/noticia');
const Image = require('../public/models/image')

const NoticiasControl = {

    // Formulario de crear notas
    renderNoteForm: (req, res) => res.render("notes/new-note", { layout: 'layout_auth' }),


    // Crear nota
    createNewNote: async (req, res) => {
        const { title, description, img } = req.body;
        const errors = [];
        if (!title) {
            errors.push({ text: "Please Write a Title." });
        }
        if (!description) {
            errors.push({ text: "Please Write a Description" });
        }
        if (errors.length > 0)
            return res.render("notes/new-note", {
                layout: 'layout_auth',
                errors,
                title,
                description,
                img,
            });

        newNote = new Note({ title, description, img });
        newNote.user = req.user.id;
        await newNote.save();
        req.flash("success_msg", "Note Added Successfully");
        res.redirect("/notes");
    },

    // Mostrar todas las notas
    renderNotes: async (req, res) => {
        const notes = await Note.find({ user: req.user.id })
            .sort({ date: "desc" })
            .lean();
        res.render("notes/all-notes", { notes, layout: 'layout_auth' });
    },

    renderNotesJson: async (req, res) => {
        const notes = await Note.find(req.param.id )
            .sort({ date: "desc" })
            .lean();
            res.json(notes);
    },

    // Editar notas
    renderEditForm: async (req, res) => {
        const note = await Note.findById(req.params.id).lean();
        if (note.user != req.user.id) {
            req.flash("error_msg", "Not Authorized");
            return res.redirect("/notes");
        }
        res.render("notes/edit-note", { note, layout: 'layout_auth' });
    },

    // Actualizar nota
    updateNote: async (req, res) => {
        const { title, description } = req.body;
        await Note.findByIdAndUpdate(req.params.id, { title, description });
        req.flash("success_msg", "Note Updated Successfully");
        res.redirect("/notes");
    },

    // Destroy nota
    deleteNote: async (req, res) => {
        await Note.findByIdAndDelete(req.params.id);
        req.flash("success_msg", "Note Deleted Successfully");
        res.redirect("/notes");
    },
}


module.exports = NoticiasControl;

