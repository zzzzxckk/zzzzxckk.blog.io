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



/**
 * 
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateUserRequest
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'avatar'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'bio'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'displayName'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserRequest
     */
    'phone'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateUserRequest
     */
    'roles'?: Array<string>;
}
