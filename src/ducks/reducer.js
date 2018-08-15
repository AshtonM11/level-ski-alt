const initialState = {
  student_name: "",
  age: "",
  skill_level: "",
  desired_skill: "",
  resorts: "",
  image_url: ""
};
const UPDATE_STUDENT_NAME = "UPDATE_STUDENT_NAME";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_SKILL_LEVEL = "UPDATE_SKILL_LEVEL";
const UPDATE_DESIRED_SKILL = "UPDATE_DESIRED_SKILL";
const UPDATE_RESORTS = "UPDATE_RESORTS";
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STUDENT_NAME:
      return Object.assign({}, state, { student_name: action.payload });

    case UPDATE_AGE:
      return Object.assign({}, state, { age: action.payload });

    case UPDATE_SKILL_LEVEL:
      return Object.assign({}, state, { skill_level: action.payload });

    case UPDATE_DESIRED_SKILL:
      return Object.assign({}, state, { desired_skill: action.payload });

    case UPDATE_RESORTS:
      return Object.assign({}, state, { resorts: action.payload });

    case UPDATE_IMAGE_URL:
      return Object.assign({}, state, { image_url: action.payload });

    // case CANCEL_BUTTON:
    //   return;

    default:
      return state;
  }
}

export function updateStudentName(student_name) {
  return {
    type: UPDATE_STUDENT_NAME,
    payload: student_name
  };
}

export function updateAge(age) {
  return {
    type: UPDATE_AGE,
    payload: age
  };
}

export function updateSkillLevel(skill_level) {
  return {
    type: UPDATE_SKILL_LEVEL,
    payload: skill_level
  };
}

export function updateDesiredSkill(desired_skill) {
  return {
    type: UPDATE_DESIRED_SKILL,
    payload: desired_skill
  };
}

export function updateResorts(resorts) {
  return {
    type: UPDATE_RESORTS,
    payload: resorts
  };
}

export function updateImageUrl(image_url) {
  return {
    type: UPDATE_IMAGE_URL,
    payload: image_url
  };
}

// export function cancelButton() {
//   return {
//     type: CANCEL_BUTTON,
//     payload: initialState
//   };
// }

export default reducer;
