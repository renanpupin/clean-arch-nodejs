export abstract class IDbAbstractRepository {
    abstract get(id?: string): Promise<any>;

    abstract create(item: any): Promise<any>;

}
