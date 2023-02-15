const router= require('express').Router();

const { getJournals, getJournal, createJournal, deleteJournal, updateJournal}= require ("../controller/journal");


router.route("/").get(getJournals).post(createJournal);
router
.route("/:jobId")
.get(getJournal)
.patch(updateJournal)
.delete(deleteJournal);

module.exports = router;