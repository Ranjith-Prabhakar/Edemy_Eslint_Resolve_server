import { Next, Req } from "../../../frameworks/types/serverPackageTypes";
import { ICourseRepository } from "../../interface/repository/courseRepository";
import { ICourseResponse } from "../../interface/request_And_Response/course";
import { catchError } from "../../middlewares/catchError";

export const getCoursesForUser = async (
  courseRepository: ICourseRepository,
  req: Req,
  next: Next
): Promise<void | ICourseResponse> => {
  try {
    return await courseRepository.getCoursesForUser()
  } catch (error) {
    catchError(error,next)
  }
};
