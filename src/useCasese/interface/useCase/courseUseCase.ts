import { Next, Req } from "../../../frameworks/types/serverPackageTypes";
import { ICloudStorageResponse } from "../request_And_Response/cloudStorageResponse";
import { ICourseResponse } from "../request_And_Response/course";

export interface ICourseUseCase {
  getCourseInProgress(req: Req, next: Next): Promise<ICourseResponse | void>;
  addCourseData(req: Req, next: Next): Promise<ICourseResponse | void>;
  addModule(req: Req, next: Next): Promise<string | void>;
  updateCourse(req: Req, next: Next): Promise<ICourseResponse | void>;
  addModuleVideos(req: Req, next: Next): Promise<ICourseResponse | void>;
  getCourses(req: Req, next: Next): Promise<ICourseResponse | void>;
  getCoursesInRequest(req: Req, next: Next): Promise<ICourseResponse | void>;
  getVideoPresignedUrl(
    req: Req,
    next: Next
  ): Promise<ICloudStorageResponse | void>;
  approveOrRejectVideo(req: Req, next: Next): Promise<ICourseResponse | void>;
  getCoursesForUser(req: Req, next: Next): Promise<ICourseResponse | void>;
}
