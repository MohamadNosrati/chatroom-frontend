interface IBaseResponse<T> {
    status:number;
    message:string;
    data:T
}

interface IBaseParams {
    limit:number;
    page:number;
}