export declare enum ApiPathEnum {
    ID_KEY = "id",
    ID_PARAM_DEF = ":id",
    RELATION_ID_KEY = "rid",
    RELATION_ID_KEY_DEF = ":rid"
}
/**
 * Prefix method can be overrided in need
 */
export declare class ApiResourcePath {
    protected readonly __singularPath: string;
    protected readonly __pluralPath: string;
    constructor(singularName: string, pluralName: string);
    protected __idParamDef(): ApiPathEnum;
    protected __relationIdDef(): ApiPathEnum;
    protected prefix(): string;
    /**
     *
     * @returns entity/:id
     */
    byId(): string;
    /**
     *
     * @returns entities
     */
    plural(): string;
    /**
     *
     * @returns entity
     */
    singular(): string;
    /**
     *
     * @param singularRelationName Singular relation name
     * @returns
     */
    relationSingular(singularRelationName: string): string;
    /**
     *
     * @param pluralRelationName Plural relation name
     * @returns
     */
    relationPlural(pluralRelationName: string): string;
    /**
     *
     * @param singularRelationName Singular relation name
     * @returns
     */
    relationId(singularRelationName: string): string;
}
