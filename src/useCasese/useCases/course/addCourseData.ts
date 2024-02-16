import { Next, Req } from "../../../frameworks/types/serverPackageTypes";
import { ICourseRepository } from "../../interface/repository/courseRepository";
import { ICourseResponse } from "../../interface/response/courseResponse";
import ErrorHandler from "../../middlewares/errorHandler";

export const addCourseData = async (
  courseRepository: ICourseRepository,
  req: Req,
  next: Next
): Promise<ICourseResponse | void> => {
  try {
    return await courseRepository.addCourseData({
      ...req.body,
      instructor: req.user,
      tags:req.body.tags.split(",")
    });
  } catch (error: any) {
    next(new ErrorHandler(500, error.message));
  }
};