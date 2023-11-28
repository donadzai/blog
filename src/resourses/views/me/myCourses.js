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

//Checkbox all courses
const checkboxAllCoursesElement = document.querySelector('#checkboxAllCourses');
const checkboxCourseChildren = document.querySelectorAll("input[name='courseSlugs']");
const formStoredCoursesElement = document.querySelector('#form-stored-courses');
const submitFormStoredCoursesBtn = document.querySelector('#submit-form-stored-courses');
const selectActionElement = document.querySelector('#select-action-stored');
let quantityChecked = 0;
checkboxAllCoursesElement.onchange = () => {
    const isCheckedAll = checkboxAllCoursesElement.checked;

    if (isCheckedAll) {
        quantityChecked = checkboxCourseChildren.length;
    } else {
        quantityChecked = 0;
    }

    removeClass();

    for (let i = 0; i < checkboxCourseChildren.length; i++) {
        const checkboxChild = checkboxCourseChildren[i];
        checkboxChild.checked = isCheckedAll;
    }
};

// lặp đống checkbox khóa học
for (let i = 0; i < checkboxCourseChildren.length; i++) {
    const checkboxChild = checkboxCourseChildren[i];
    checkboxChild.onchange = () => {
        const isChecked = checkboxChild.checked;

        if (isChecked) {
            quantityChecked = ++quantityChecked;
        } else {
            quantityChecked = --quantityChecked;
        }

        removeClass();

        if (quantityChecked === checkboxCourseChildren.length) {
            checkboxAllCoursesElement.checked = true;
        } else {
            checkboxAllCoursesElement.checked = false;
        }
    };
}

submitFormStoredCoursesBtn.onclick = () => {
    formStoredCoursesElement.submit();
};

selectActionElement.onchange = () => {
    removeClass();
};

const removeClass = () => {
    if (selectActionElement.value == '') {
        isChoice = false;
    } else {
        isChoice = true;
    }
    if (quantityChecked > 0 && isChoice) {
        submitFormStoredCoursesBtn.classList.remove('disabled');
    } else {
        submitFormStoredCoursesBtn.classList.add('disabled');
    }
};
