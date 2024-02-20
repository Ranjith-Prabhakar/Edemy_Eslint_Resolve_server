import { Next, Req, Res } from "../frameworks/types/serverPackageTypes";
import { ICourseUseCase } from "../useCasese/interface/useCase/courseUseCase";
import ErrorHandler from "../useCasese/middlewares/errorHandler";
import { inputValidation } from "./middleware/inputValidation";

export class CoursesController {
  private readonly courseUseCase: ICourseUseCase;
  constructor(courseUseCase: ICourseUseCase) {
    this.courseUseCase = courseUseCase;
  }

  async getCourseInProgress(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getCourseInProgress", next);
      const result = await this.courseUseCase.getCourseInProgress(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async addCourseData(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "addCourseData", next);
      const result = await this.courseUseCase.addCourseData(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async addModule(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "addModule", next);
      const result = await this.courseUseCase.addModule(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async updateCourse(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "updateCourse", next);
      const result = await this.courseUseCase.updateCourse(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async addModuleVideos(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "addModuleVideos", next);
      const result = await this.courseUseCase.addModuleVideos(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getCourses(req: Req, res: Res, next: Next) {
    try {
      const result = await this.courseUseCase.getCourses(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getCoursesInRequest(req: Req, res: Res, next: Next) {
    try {
      const result = await this.courseUseCase.getCoursesInRequest(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async getVideoPresignedUrl(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "getVideoPresignedUrl", next);
      const result = await this.courseUseCase.getVideoPresignedUrl(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }

  async approveOrRejectVideo(req: Req, res: Res, next: Next) {
    try {
      await inputValidation(req, "approveOrRejectVideo", next);
      const result = await this.courseUseCase.approveOrRejectVideo(req, next);
      res.status(200).json(result);
    } catch (error: any) {
      return next(new ErrorHandler(500, error.message));
    }
  }
}
