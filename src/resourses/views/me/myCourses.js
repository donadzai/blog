const deleteModal = document.getElementById('deleteModal');
if (deleteModal) {
    deleteModal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget;
        const slugCourse = button.getAttribute('data-bs-whatever');
        const formSubmitDelete = document.querySelector('#form-submit-delete');
        formSubmitDelete.action = `/courses/${slugCourse}/delete?_method=DELETE`;
        const deleteBtn = document.querySelector('.btn.btn-primary');
        deleteBtn.addEventListener('click', () => {
            formSubmitDelete.submit();
        });
    });
}

const restoreBtns = document.querySelectorAll('.btn.btn-outline-info');
const formRestore = document.querySelector('#form-restore');

for (let index = 0; index < restoreBtns.length; index++) {
    const restoreBtn = restoreBtns[index];
    restoreBtn.addEventListener('click', (e) => {
        formRestore.action = `/courses/${e.target.id}/restore?_method=PATCH`;
        formRestore.submit();
    });
}

const forceModel = document.getElementById('forceCourse');
if (forceModel) {
    forceModel.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget;
        const slugCourse = button.getAttribute('data-bs-whatever');
        const formSubmitForce = document.querySelector('#form-submit-force');
        formSubmitForce.action = `/courses/${slugCourse}/force?_method=DELETE`;
        const forceBtn = document.querySelector('.btn.btn-primary');
        forceBtn.addEventListener('click', () => {
            formSubmitForce.submit();
        });
    });
}
