/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Decimal } from './Decimal';
import {
    DecimalFromJSON,
    DecimalFromJSONTyped,
    DecimalToJSON,
} from './Decimal';

/**
 * 
 * @export
 * @interface FormatTest
 */
export interface FormatTest {
    /**
     * 
     * @type {number}
     * @memberof FormatTest
     */
    integer?: number;
    /**
     * 
     * @type {number}
     * @memberof FormatTest
     */
    int32?: number;
    /**
     * 
     * @type {number}
     * @memberof FormatTest
     */
    int64?: number;
    /**
     * 
     * @type {number}
     * @memberof FormatTest
     */
    number: number;
    /**
     * 
     * @type {number}
     * @memberof FormatTest
     */
    _float?: number;
    /**
     * 
     * @type {number}
     * @memberof FormatTest
     */
    _double?: number;
    /**
     * 
     * @type {Decimal}
     * @memberof FormatTest
     */
    decimal?: Decimal;
    /**
     * 
     * @type {string}
     * @memberof FormatTest
     */
    string?: string;
    /**
     * 
     * @type {string}
     * @memberof FormatTest
     */
    _byte: string;
    /**
     * 
     * @type {Blob}
     * @memberof FormatTest
     */
    binary?: Blob;
    /**
     * 
     * @type {Date}
     * @memberof FormatTest
     */
    date: Date;
    /**
     * 
     * @type {Date}
     * @memberof FormatTest
     */
    dateTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof FormatTest
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof FormatTest
     */
    password: string;
    /**
     * A string that is a 10 digit number. Can have leading zeros.
     * @type {string}
     * @memberof FormatTest
     */
    patternWithDigits?: string;
    /**
     * A string starting with 'image_' (case insensitive) and one to three digits following i.e. Image_01.
     * @type {string}
     * @memberof FormatTest
     */
    patternWithDigitsAndDelimiter?: string;
}

export function FormatTestFromJSON(json: any): FormatTest {
    return FormatTestFromJSONTyped(json, false);
}

export function FormatTestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatTest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'integer': !exists(json, 'integer') ? undefined : json['integer'],
        'int32': !exists(json, 'int32') ? undefined : json['int32'],
        'int64': !exists(json, 'int64') ? undefined : json['int64'],
        'number': json['number'],
        '_float': !exists(json, 'float') ? undefined : json['float'],
        '_double': !exists(json, 'double') ? undefined : json['double'],
        'decimal': !exists(json, 'decimal') ? undefined : DecimalFromJSON(json['decimal']),
        'string': !exists(json, 'string') ? undefined : json['string'],
        '_byte': json['byte'],
        'binary': !exists(json, 'binary') ? undefined : json['binary'],
        'date': (new Date(json['date'])),
        'dateTime': !exists(json, 'dateTime') ? undefined : (new Date(json['dateTime'])),
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'password': json['password'],
        'patternWithDigits': !exists(json, 'pattern_with_digits') ? undefined : json['pattern_with_digits'],
        'patternWithDigitsAndDelimiter': !exists(json, 'pattern_with_digits_and_delimiter') ? undefined : json['pattern_with_digits_and_delimiter'],
    };
}

export function FormatTestToJSON(value?: FormatTest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'integer': value.integer,
        'int32': value.int32,
        'int64': value.int64,
        'number': value.number,
        'float': value._float,
        'double': value._double,
        'decimal': DecimalToJSON(value.decimal),
        'string': value.string,
        'byte': value._byte,
        'binary': value.binary,
        'date': (value.date.toISOString().substr(0,10)),
        'dateTime': value.dateTime === undefined ? undefined : (value.dateTime.toISOString()),
        'uuid': value.uuid,
        'password': value.password,
        'pattern_with_digits': value.patternWithDigits,
        'pattern_with_digits_and_delimiter': value.patternWithDigitsAndDelimiter,
    };
}

