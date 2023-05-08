export interface Language {
    btn_name: string;
    modal_title: string;
    close_btn: string;
}

export interface Navbar {
    icon: string;
    home: string;
    get_started: string;
    about: string;
    language: Language;
}

export interface Title {
    txt: string;
    ishighlighted: boolean;
}

export interface HomeScreen {
    title: Title[];
    subtitle: string;
    actionBtns: string[];
}

export interface Title2 {
    txt: string;
    ishighlighted: boolean;
}

export interface Plan {
    name: string;
    price: number;
    features: string[];
    isAvailable:boolean;
}

export interface PlansScreen {
    unavailable: string;
    title: Title2[];
    subtitle: string;
    plans: Plan[];
    joinBtn: string;
}

export interface Title3 {
    txt: string;
    ishighlighted: boolean;
}

export interface MuscleGroup {
    name: string;
    muscles: string[];
}

export interface PTitles {
    instructions: string;
    equipment: string;
    difficulty: string;
    muscle: string;
    type: string;
}

export interface ExerciseCard {
    p_titles: PTitles;
}

export interface ModalBtns {
    close: string;
    add: string;
}

export interface ChooseProgramScreen {
    title: Title3[];
    nextScreenBtn: string,
    unCompletedMessage: string,
    completedMessage: string,
    modalTitle: string;
    subtitle: string;
    muscleGroups: MuscleGroup[];
    exerciseCard: ExerciseCard;
    modalBtns: ModalBtns;
}

export interface Title4 {
    txt: string;
    ishighlighted: boolean;
}

export interface Completed {
    title: string;
    subtitle: string;
}

export interface PTitles2 {
    break: string;
    work: string;
    instructions: string;
    completed: Completed;
}

export interface Txts {
    p_titles: PTitles2;
    start: string;
    info:{
        muscle: string;
        difficulty: string;
        set: string;
        exercise: string;
    }
}

export interface Workout {
    title: Title4[];
    txts: Txts;
}

export interface Title {
    txt: string;
    ishighlighted: boolean;
}

export interface ErrorPage {
    title: Title[];
    subtitle: string;
    btnTxt: string;
}

export interface Paragraph {
    title: string;
    content: string;
}

export interface AboutI {
    title: Title[];
    subtitle: string;
    paragraphs: Paragraph[];
}


export interface LanguageModel {
    language: string;
    direction: string;
    navbar: Navbar;
    homeScreen: HomeScreen;
    plansScreen: PlansScreen;
    chooseProgramScreen: ChooseProgramScreen;
    workout: Workout;
    errorPage:ErrorPage;
    about: AboutI;
}