/**
 * metadata-service
 * This is the metadata service of consort-group. It handels CRU(D)-operations for the application metadata.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: manuel.hiemer@consort-it.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MetadataService } from './meta-data-service';

export interface MetadataProjectPhase {
  name: string;
  services: Array<MetadataService>;
}
