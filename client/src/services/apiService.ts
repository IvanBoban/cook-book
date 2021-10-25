import CreateRecipeDTO from "../model/CreateRecipeDTO";
import UpdateRecipeDTO from "../model/UpdateRecipeDTO";
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

  getSingleRecipe(id: number) {
    return this.axiosService.get({
      resource: `/recipes/${id}`,
    });
  }

  deleteRecipe(id: number) {
    return this.axiosService.delete({
      resource: `/recipes/${id}`,
    });
  }

  updateRecipe(id: number, DTO: UpdateRecipeDTO) {
    return this.axiosService.patch({
      resource: `/recipes/${id}`,
      data: DTO,
    });
  }

  createRecipe(DTO: CreateRecipeDTO) {
    return this.axiosService.post({
      resource: `recipes`,
      data: DTO,
    });
  }
}
