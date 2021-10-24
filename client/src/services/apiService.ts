import AxiosService from "./axiosService";

export default class APIService {
  private axiosService: AxiosService;

  constructor() {
    this.axiosService = new AxiosService();
  }

  getAllRecipes() {
    return this.axiosService.get({
      resource: "/recipes",
    });
  }

  getSingleRecipe(id: string) {
    return this.axiosService.get({
      resource: `/recipes/${id}`,
    });
  }
}
