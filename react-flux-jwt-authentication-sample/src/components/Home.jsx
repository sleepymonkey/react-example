import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'
import DataGrid from 'react-datagrid';
import PropertyDataStore from './data/PropertyDataStore';
import PropertyDataService from './data/PropertyDataService';


//var data     = //require('../data/1500');
var data =
//[
//  { id: 0, index: 1, firstName: 'John', city: 'London', email: 'jon@gmail.com'},
//  { id: 1, index: 2, firstName: 'Fred', city: 'Charleston', email: 'fred@gmail.com'},
//  { id: 2, index: 3, firstName: 'Athan', city: 'San Francisco', email: 'athan@gmail.com'}
//];

[
  {"id":578,"fullAddress":null,"bedrooms":"4","baths":"3","latitude":"33.0743","longitude":"-97.0604","valueHeader":"Rent","hitRatio":"99","bippoRent":"2995","bippoValue":"322358","cdom":"10","maxBid":"300598"},
  {"id":580,"fullAddress":null,"bedrooms":"4","baths":"3","latitude":"33.1635","longitude":"-96.6674","valueHeader":"Rent","hitRatio":"56","bippoRent":"1914","bippoValue":"273497","cdom":"3","maxBid":"141078"}
];


var columns  = [
  { name: 'id', title: '#', width: 50 },
  { name: 'fullAddress' },
  { name: 'bedrooms'  },
  { name: 'baths'  },
  { name: 'latitude'  },
  { name: 'longitude'  },
  { name: 'valueHeader'  },
  { name: 'hitRatio'  },
  { name: 'bippoRent'  },
  { name: 'bippoValue'  },
  { name: 'cdom'  },
  { name: 'maxBid' }

];

var SELECTED_ID = {};


export default AuthenticatedComponent(class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getPropertyData();
  }


  /**
   * get the property data already fetched, if any...
   */
  getPropertyData() {
    return {
      propertyData: PropertyDataStore.jsonData
    };
  }

  /**
   * explicitly request the property data
   */
  requestPropertyData() {
    PropertyDataService.getPropertyData();
  }

  componentWillMount() {
    if (!this.state.propertyData) {
      this.requestPropertyData();
    }

    PropertyDataStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    PropertyDataStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(this.getPropertyData());
  }

  handleColumnOrderChange(index, dropIndex) {
    //alert("index, drop index: " + index + " " + dropIndex);
    var col = columns[index];
    columns.splice(index, 1); //delete from index, 1 item
    columns.splice(dropIndex, 0, col);

    this.setState({});
  }

  selectionChanged(newSelectedId, data) {
    var propertyId = data[0].id;
    SELECTED_ID = newSelectedId;

    PropertyDataService.getPropertyDetail(propertyId);
  }

  render() {
    // way down the road shit, but we could maintain a key (dirty flag) on the server.  when rendering this
    // page, we could make a request with just the key.  if null, we make return the entire data set.  if not and
    // hasn't changed (on the server) then we return some id that says "use your local data store".  the user currently
    // can accomplish this simply by never refreshing this page (or refreshing to actually make the query to the server)

    var data = this.state.propertyData;
    console.log("inside render of data grid");
    //console.log("data during render: ", data, new Date().getTime());

    return <DataGrid
      idProperty='id'
      dataSource={data}
      columns={columns}
      style={{height: 500}}
      onColumnOrderChange={this.handleColumnOrderChange.bind(this)}
      selected={SELECTED_ID}
      onSelectionChange={this.selectionChanged.bind(this)}
      />
  }

  // withColumnMenu={false}
  // pagination={true}

});
