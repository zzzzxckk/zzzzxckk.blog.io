/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Reason } from '../models';
// @ts-ignore
import { ReasonList } from '../models';
/**
 * NotificationHaloRunV1alpha1ReasonApi - axios parameter creator
 * @export
 */
export const NotificationHaloRunV1alpha1ReasonApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create notification.halo.run/v1alpha1/Reason
         * @param {Reason} [reason] Fresh reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createnotificationHaloRunV1alpha1Reason: async (reason?: Reason, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasons`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reason, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete notification.halo.run/v1alpha1/Reason
         * @param {string} name Name of reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletenotificationHaloRunV1alpha1Reason: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deletenotificationHaloRunV1alpha1Reason', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasons/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get notification.halo.run/v1alpha1/Reason
         * @param {string} name Name of reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getnotificationHaloRunV1alpha1Reason: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getnotificationHaloRunV1alpha1Reason', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasons/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List notification.halo.run/v1alpha1/Reason
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listnotificationHaloRunV1alpha1Reason: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasons`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update notification.halo.run/v1alpha1/Reason
         * @param {string} name Name of reason
         * @param {Reason} [reason] Updated reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatenotificationHaloRunV1alpha1Reason: async (name: string, reason?: Reason, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updatenotificationHaloRunV1alpha1Reason', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasons/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reason, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NotificationHaloRunV1alpha1ReasonApi - functional programming interface
 * @export
 */
export const NotificationHaloRunV1alpha1ReasonApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NotificationHaloRunV1alpha1ReasonApiAxiosParamCreator(configuration)
    return {
        /**
         * Create notification.halo.run/v1alpha1/Reason
         * @param {Reason} [reason] Fresh reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createnotificationHaloRunV1alpha1Reason(reason?: Reason, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reason>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createnotificationHaloRunV1alpha1Reason(reason, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1ReasonApi.createnotificationHaloRunV1alpha1Reason']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete notification.halo.run/v1alpha1/Reason
         * @param {string} name Name of reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deletenotificationHaloRunV1alpha1Reason(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deletenotificationHaloRunV1alpha1Reason(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1ReasonApi.deletenotificationHaloRunV1alpha1Reason']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get notification.halo.run/v1alpha1/Reason
         * @param {string} name Name of reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getnotificationHaloRunV1alpha1Reason(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reason>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getnotificationHaloRunV1alpha1Reason(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1ReasonApi.getnotificationHaloRunV1alpha1Reason']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List notification.halo.run/v1alpha1/Reason
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listnotificationHaloRunV1alpha1Reason(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReasonList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listnotificationHaloRunV1alpha1Reason(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1ReasonApi.listnotificationHaloRunV1alpha1Reason']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update notification.halo.run/v1alpha1/Reason
         * @param {string} name Name of reason
         * @param {Reason} [reason] Updated reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatenotificationHaloRunV1alpha1Reason(name: string, reason?: Reason, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Reason>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatenotificationHaloRunV1alpha1Reason(name, reason, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['NotificationHaloRunV1alpha1ReasonApi.updatenotificationHaloRunV1alpha1Reason']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * NotificationHaloRunV1alpha1ReasonApi - factory interface
 * @export
 */
export const NotificationHaloRunV1alpha1ReasonApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NotificationHaloRunV1alpha1ReasonApiFp(configuration)
    return {
        /**
         * Create notification.halo.run/v1alpha1/Reason
         * @param {NotificationHaloRunV1alpha1ReasonApiCreatenotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createnotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiCreatenotificationHaloRunV1alpha1ReasonRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Reason> {
            return localVarFp.createnotificationHaloRunV1alpha1Reason(requestParameters.reason, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete notification.halo.run/v1alpha1/Reason
         * @param {NotificationHaloRunV1alpha1ReasonApiDeletenotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletenotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiDeletenotificationHaloRunV1alpha1ReasonRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deletenotificationHaloRunV1alpha1Reason(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get notification.halo.run/v1alpha1/Reason
         * @param {NotificationHaloRunV1alpha1ReasonApiGetnotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getnotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiGetnotificationHaloRunV1alpha1ReasonRequest, options?: RawAxiosRequestConfig): AxiosPromise<Reason> {
            return localVarFp.getnotificationHaloRunV1alpha1Reason(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List notification.halo.run/v1alpha1/Reason
         * @param {NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listnotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1ReasonRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ReasonList> {
            return localVarFp.listnotificationHaloRunV1alpha1Reason(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Update notification.halo.run/v1alpha1/Reason
         * @param {NotificationHaloRunV1alpha1ReasonApiUpdatenotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatenotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiUpdatenotificationHaloRunV1alpha1ReasonRequest, options?: RawAxiosRequestConfig): AxiosPromise<Reason> {
            return localVarFp.updatenotificationHaloRunV1alpha1Reason(requestParameters.name, requestParameters.reason, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createnotificationHaloRunV1alpha1Reason operation in NotificationHaloRunV1alpha1ReasonApi.
 * @export
 * @interface NotificationHaloRunV1alpha1ReasonApiCreatenotificationHaloRunV1alpha1ReasonRequest
 */
export interface NotificationHaloRunV1alpha1ReasonApiCreatenotificationHaloRunV1alpha1ReasonRequest {
    /**
     * Fresh reason
     * @type {Reason}
     * @memberof NotificationHaloRunV1alpha1ReasonApiCreatenotificationHaloRunV1alpha1Reason
     */
    readonly reason?: Reason
}

/**
 * Request parameters for deletenotificationHaloRunV1alpha1Reason operation in NotificationHaloRunV1alpha1ReasonApi.
 * @export
 * @interface NotificationHaloRunV1alpha1ReasonApiDeletenotificationHaloRunV1alpha1ReasonRequest
 */
export interface NotificationHaloRunV1alpha1ReasonApiDeletenotificationHaloRunV1alpha1ReasonRequest {
    /**
     * Name of reason
     * @type {string}
     * @memberof NotificationHaloRunV1alpha1ReasonApiDeletenotificationHaloRunV1alpha1Reason
     */
    readonly name: string
}

/**
 * Request parameters for getnotificationHaloRunV1alpha1Reason operation in NotificationHaloRunV1alpha1ReasonApi.
 * @export
 * @interface NotificationHaloRunV1alpha1ReasonApiGetnotificationHaloRunV1alpha1ReasonRequest
 */
export interface NotificationHaloRunV1alpha1ReasonApiGetnotificationHaloRunV1alpha1ReasonRequest {
    /**
     * Name of reason
     * @type {string}
     * @memberof NotificationHaloRunV1alpha1ReasonApiGetnotificationHaloRunV1alpha1Reason
     */
    readonly name: string
}

/**
 * Request parameters for listnotificationHaloRunV1alpha1Reason operation in NotificationHaloRunV1alpha1ReasonApi.
 * @export
 * @interface NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1ReasonRequest
 */
export interface NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1ReasonRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1Reason
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1Reason
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1Reason
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1Reason
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1Reason
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for updatenotificationHaloRunV1alpha1Reason operation in NotificationHaloRunV1alpha1ReasonApi.
 * @export
 * @interface NotificationHaloRunV1alpha1ReasonApiUpdatenotificationHaloRunV1alpha1ReasonRequest
 */
export interface NotificationHaloRunV1alpha1ReasonApiUpdatenotificationHaloRunV1alpha1ReasonRequest {
    /**
     * Name of reason
     * @type {string}
     * @memberof NotificationHaloRunV1alpha1ReasonApiUpdatenotificationHaloRunV1alpha1Reason
     */
    readonly name: string

    /**
     * Updated reason
     * @type {Reason}
     * @memberof NotificationHaloRunV1alpha1ReasonApiUpdatenotificationHaloRunV1alpha1Reason
     */
    readonly reason?: Reason
}

/**
 * NotificationHaloRunV1alpha1ReasonApi - object-oriented interface
 * @export
 * @class NotificationHaloRunV1alpha1ReasonApi
 * @extends {BaseAPI}
 */
export class NotificationHaloRunV1alpha1ReasonApi extends BaseAPI {
    /**
     * Create notification.halo.run/v1alpha1/Reason
     * @param {NotificationHaloRunV1alpha1ReasonApiCreatenotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1ReasonApi
     */
    public createnotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiCreatenotificationHaloRunV1alpha1ReasonRequest = {}, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1ReasonApiFp(this.configuration).createnotificationHaloRunV1alpha1Reason(requestParameters.reason, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete notification.halo.run/v1alpha1/Reason
     * @param {NotificationHaloRunV1alpha1ReasonApiDeletenotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1ReasonApi
     */
    public deletenotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiDeletenotificationHaloRunV1alpha1ReasonRequest, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1ReasonApiFp(this.configuration).deletenotificationHaloRunV1alpha1Reason(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get notification.halo.run/v1alpha1/Reason
     * @param {NotificationHaloRunV1alpha1ReasonApiGetnotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1ReasonApi
     */
    public getnotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiGetnotificationHaloRunV1alpha1ReasonRequest, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1ReasonApiFp(this.configuration).getnotificationHaloRunV1alpha1Reason(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List notification.halo.run/v1alpha1/Reason
     * @param {NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1ReasonApi
     */
    public listnotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiListnotificationHaloRunV1alpha1ReasonRequest = {}, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1ReasonApiFp(this.configuration).listnotificationHaloRunV1alpha1Reason(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update notification.halo.run/v1alpha1/Reason
     * @param {NotificationHaloRunV1alpha1ReasonApiUpdatenotificationHaloRunV1alpha1ReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NotificationHaloRunV1alpha1ReasonApi
     */
    public updatenotificationHaloRunV1alpha1Reason(requestParameters: NotificationHaloRunV1alpha1ReasonApiUpdatenotificationHaloRunV1alpha1ReasonRequest, options?: RawAxiosRequestConfig) {
        return NotificationHaloRunV1alpha1ReasonApiFp(this.configuration).updatenotificationHaloRunV1alpha1Reason(requestParameters.name, requestParameters.reason, options).then((request) => request(this.axios, this.basePath));
    }
}
