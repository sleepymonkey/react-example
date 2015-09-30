import BaseService from '../../services/BaseService';
import {STD_PROPERTY_DATA_URL} from '../../constants/Constants';
import PropertyDataActions from './PropertyDataActions';


class PropertyDataService extends BaseService {

  getPropertyData(params) {

    this.getJson(STD_PROPERTY_DATA_URL, params, function (response) {
      var json = response.json.data;
      //console.log("json returned from std data call: ", json);

      PropertyDataActions.propertyDataRetrieved(JSON.parse(json));
    });
  }

  getPropertyDetail(id) {
    var json = {
      "DDTid": "3358490",
      "MLSid": "9704453",
      "Matrix_Unique_ID": "1500729",
      "Source": "MLS",
      "SaleType": "MLS",
      "EventNumber": null,
      "AuctionItemNumber": null,
      "TrusteeForeclosureNo": null,
      "APN": "00000212071000000",
      "Owner": null,
      "Address": "5012 DENTON DR",
      "City": "Dallas",
      "County": "Dallas",
      "State": "TX",
      "Zip": "75235",
      "AddressFull": "5012 DENTON DR,Dallas,TX 75235",
      "Status": "Sold",
      "AuctionDate": null,
      "PropertyType": "Residential",
      "SqFt": "1217",
      "Bedrooms": "2",
      "Baths": "2",
      "HalfBaths": "1",
      "LotSize": "7649",
      "YearBuilt": "1945",
      "LegalDescription": "OAK LAWN HEIGHTS BLK I\/2333 LT 23 VOL2003254\/14369 DD12192003 CO-DC 2333 00I 02300 1002333 00I",
      "EffectiveYearBuilt": null,
      "FoundationCode": null,
      "RoofCode": null,
      "Heating": null,
      "Cooling": null,
      "ConditionCode": null,
      "ConstructionQuality": null,
      "NumberStories": "1",
      "NumberRooms": "0",
      "AppraisedValue": "0",
      "AssessedValue": "205610",
      "AppraisedLandValue": "0",
      "AppraisalYear": "2013",
      "TaxDepreciationPercent": "0",
      "Fireplaces": "1",
      "Pool": "0",
      "CensusTract": "404",
      "CensusBlockGroup": "0",
      "Longitude": "-96.8267",
      "Latitude": "32.8179",
      "AnnualTax": "5594",
      "UnitCount": "1",
      "ConstructionMaterials": "Brick",
      "Fencing": "Chain Link",
      "SchoolDistrict": null,
      "ElementarySchool": "Hernandez",
      "MiddleSchool": "Rusk",
      "HighSchool": "Northdalla",
      "Subdivision": "OAK LAWN HEIGHTS",
      "SoldPrice": "165000",
      "ListPrice": "169500",
      "PricePerSqFt": "139",
      "ListingDate": "2003-07-30",
      "CloseDate": "2003-12-19",
      "CarportParkingSpaces": "0",
      "GarageParkingSpaces": "2",
      "TotalCoveredParkingSpaces": "2",
      "AssociationFee": "0",
      "AssociationFeeFrequency": null,
      "CDOM": "106",
      "Rent": null,
      "Occupied": "Vacant",
      "OriginalListPrice": "169500",
      "PublicRemarks": "BEAUTIFULLY RENOVATED.REDESIGNED ROOF STRUCTURE W\/NEW DECKING & SHINGLES. NEW GOLD PAINT W\/WHITE CROWN MOLDING&CHAIR RAIL.CARPET.TILE FLOORING IN KIT UR&BATHS.KITCHEN CABINETS.GRANITE LOOK COUNTERTOPS.GAS RANGE.DW.DISP. LIGHT FIXTURES.PEDESTAL LAVS.CH03.A\/C00.FP IN MBR.NEW WIRING LR.DR&BRS.STORM",
      "BIPPOrent": "1095",
      "BIPPOvalue": "267183",
      "InsuranceVacant": "2501",
      "InsuranceOccupied": "1563",
      "RehabForRent": "21906",
      "RehabForFlip": "24340",
      "DDTNotes": "",
      "updated": "2015-09-14 12:27:19",
      "TAXid": null,
      "FloodPlain": null,
      "MLS": "North Texas Real Estate Information Systems",
      "PropertySubType": "RES-Single Family",
      "TaxPropertyType": null,
      "ConstructionCode": null,
      "LocationType": "Suburban",
      "FinancingProposed": "Cash.Conventional.FHA",
      "PossibleShortSale": null,
      "SellerType": "Individual(s)",
      "PhotoCount": "1",
      "LeasedDate": null,
      "Created": "2015-09-02 23:11:13",
      "ABrent": "1095",
      "ABrentcomps": "2015\/09\/14 13:27:15\n Comp 1: Distance: 0.3 GRM: 0 Beds: 2 Baths: 3 \n Comp 2: Distance: 0.22 GRM: 11.46 Beds: 2 Baths: 1 \n Comp 3: Distance: 0.08 GRM: 25.52 Beds: 2 Baths: 1 \n Comp 4: Distance: 0.35 GRM: 38.36 Beds: 2 Baths: 1 \n Comp 5: Distance: 0.32 GRM:",
      "ABvalue": "267183",
      "ABvaluecomps": "2015\/09\/14 13:27:15\n Comp 1: Distance: 0.56 ABvalue: 227133 Beds: 2 Baths: 2 SQFT: 1144  LotSize: 6730 \n Comp 2: Distance: 0.52 ABvalue: 259769 Beds: 2 Baths: 1 SQFT: 1179  LotSize: 7057 \n Comp 3: Distance: 0.26 ABvalue: 275737 Beds: 2 Baths: 1 SQFT: 1315",
      "ListAgentFullName": "Sue Harrington",
      "ListOfficeName": "RE\/MAX DFW Associates",
      "CalcName": "RentMaxBid for cap_rate=3",
      "MaxBid": "0",
      "HitRatio": "0",
      "ValueHeader": "Rent",
      "HitRatioHeader": "HitRatio"
    };

    PropertyDataActions.propertyDetailDataRetrieved(json);
  }

}

export default new PropertyDataService()
