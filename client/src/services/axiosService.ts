import axios, { AxiosInstance } from "axios";

export default class AxiosService {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_SERVICE,
    });
  }

  get({ resource, params }: GetParams) {
    return this.instance.get(resource, params);
  }

  post({ resource, data }: PostParams) {
    return this.instance.post(resource, data);
  }

  patch({ resource, data }: PatchParams) {
    return this.instance.patch(resource, data);
  }

  put({ resource, data }: PutParams) {
    return this.instance.put(resource, data);
  }

  delete({ resource }: DeleteParams) {
    return this.instance.delete(resource);
  }
}

interface GetParams {
  resource: string;
  params?: object;
}

interface PostParams {
  resource: string;
  data: object;
}

interface PatchParams {
  resource: string;
  data: object;
}

interface PutParams {
  resource: string;
  data: object;
}

interface DeleteParams {
  resource: string;
}
