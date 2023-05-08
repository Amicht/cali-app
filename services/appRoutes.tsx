export interface AppRoutes{
    homeScreen:string;
    plansScreen:string;
    chooseProgramScreen:string;
    workout:string;
    about:string;
}

export const appRoutes: AppRoutes = {
    homeScreen: "/",
    plansScreen: "/get-started",
    chooseProgramScreen: "/choose-program",
    workout: "/choose-program/workout",
    about: "/about",
  }