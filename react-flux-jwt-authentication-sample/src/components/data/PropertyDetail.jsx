import React from 'react';
import ImageGallery from 'react-image-gallery';
import AuthenticatedComponent from '../AuthenticatedComponent'
import PropertyDataStore from './PropertyDataStore';

// image gallery npm site:  https://www.npmjs.com/package/react-image-gallery

var images = [
  {
    original: 'http://rypecreative.com/easy-living/images/bathroom.jpg',
    thumbnail: 'http://rypecreative.com/easy-living/images/blog-thumb4.jpg'
  },
  {
    original: 'http://rypecreative.com/easy-living/images/banner4.jpg',
    thumbnail: 'http://rypecreative.com/easy-living/images/blog-thumb1.jpg'
  },
  {
    original: 'http://rypecreative.com/easy-living/images/banner5.jpg',
    thumbnail: 'http://rypecreative.com/easy-living/images/blog-thumb3.jpg'
  },
  {
    original: 'http://rypecreative.com/easy-living/images/banner3.jpg',
    thumbnail: 'http://rypecreative.com/easy-living/images/blog-thumb2.png'
  }
];


export default AuthenticatedComponent(class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getPropertyDetail();
  }


  /**
   * get the property data already fetched, if any...
   */
  getPropertyDetail() {
    return {
      propertyData: PropertyDataStore.currentPropertyDetail
    };
  }

  /**
   * explicitly request the property data
   */
  requestPropertyData() {
    //PropertyDataService.getPropertyData();
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
    this.setState(this.getPropertyDetail());
  }

  _handleSlide(index) {
    console.log('Slid to ' + index);
  }

  render() {
    // if/when we decide to make this a modal:
    // http://stackoverflow.com/questions/14961932/how-to-divide-a-twitter-bootstrap-modal-into-2-parts

    // add this css for the vertical 'divider'
    // .border-right {
    //    border-right: 1px solid #ddd;
    // }

    // should consider making a separate call for the 'additional' data (More Parameters currently).  we could deal
    // with a single data set (all propererties based on cur query) and pull property detail simply from our local
    // data store.  if they wanted the additional data, make them explicitly request it

    // example of how we could add styling to any html elements...
    var vpStyle = {
      "width": "100%",
      "overflow": "hidden",
      "position": "relative",
      "height": "355px"
    };

    // check the transferring props shortcut here:
    // http://facebook.github.io/react/docs/reusable-components.html

    return (

      <div className="container">

        <div className="col-lg-6 col-md-6">
          <div className="row">

            <ImageGallery
              items={images}
              autoPlay={false}
              slideInterval={4000}
              onSlide={this._handleSlide.bind(this)}
              showBullets={false}/>

          </div>
        </div>

        <div className="col-lg-5 col-md-5 pull-right">
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">Property Overview</div>
                <div className="panel-body">
                  <div className="col-lg-7 col-md-7">
                    1107 COVENTRY LANE <br/>
                    DUNCANVILLE, TX 75137 <br/><br/>
                    <h4>List Price: $205,000</h4>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    BEDS: 5 <br/>
                    BATHS: 3 <br/>
                    SQ. FEET: 2,783 <br/>
                    YEAR BUILT: 1977 <br/>
                  </div>
                </div>
              </div>
            </div>

          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">Property Calculator</div>
              <div className="panel-body nopadding">
                <div className="col-lg-6 col-md-6">
                  <form action="#" method="post" role="form">
<br/>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="roi">ROI (for holding period)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="roi" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="annual-roi">Annual ROI</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="annual-roi" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="arv">ARV</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="arv" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="profit">Profit</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="profit" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="rehab">Rehab ($)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="rehab" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="closing-cost">Sale Closing Cost ($)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="closing-cost" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="commission">Commissions (%)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="commission" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="holding-period">Holding Period (months)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="holding-period" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="ins-flip">Insurance ($/year)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="ins-flip" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="borrowed-flip">Percent Borrowed</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="borrowed-flip" type="text"/>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-lg-6 col-md-6">
                  <form action="#" method="post" role="form">
                    <br/>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="cap-rate">Cap Rate (%)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="cap-rate" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="rent">Rent ($/month)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="rent" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="rehab">Rehab ($)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="rehab" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="vacancy-rate">Vacancy Rate (%)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="vacancy-rate" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="maint">Maintenance (x Rent)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="maint" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="turnover">Turnover (x Rent)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="turnover" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="mgt-fee">Management Fee (%)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="mgt-fee" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="first-mo-rent">First Month's Rent (%)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="first-mo-rent" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="ins-rent">Insurance ($/year)</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="ins-rent" type="text"/>
                      </div>
                    </div>
                    <div>
                      <label className="col-sm-9 field-label-xs nopadding" for="borrowed-rent">Percent Borrowed</label>
                      <div className="col-sm-2 nopadding">
                        <input className="form-control input-xs" id="borrowed-rent" type="text"/>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

});


/*



this mostly worked

 <div className="gallery">
 <div className="bx-wrapper" style={bxStyle}>
 <div className="bx-viewport" style={vpStyle}>
 <ul className="bxslider2" style={slStyle}>
 <li style={liStyle} className="bx-clone"><img src="http://rypecreative.com/easy-living/images/bathroom.jpg" alt=""/></li>
 <li style={liStyle}><img src="http://rypecreative.com/easy-living/images/banner4.jpg" alt=""/></li>
 <li style={liStyle}><img src="http://rypecreative.com/easy-living/images/banner5.jpg" alt=""/></li>
 <li style={liStyle}><img src="http://rypecreative.com/easy-living/images/banner3.jpg" alt=""/></li>
 <li style={liStyle}><img src="http://rypecreative.com/easy-living/images/bathroom.jpg" alt=""/></li>
 <li style={liStyle} className="bx-clone"><img src="http://rypecreative.com/easy-living/images/banner4.jpg" alt=""/></li></ul></div>
 <div className="bx-controls"></div>
 </div>

 <div id="bx-pager" style={bxPagerStyle}>
 <a data-slide-index="0" href="" className="active"><img src="http://rypecreative.com/easy-living/images/blog-thumb1.jpg" alt=""/></a>
 <a data-slide-index="1" href=""><img src="http://rypecreative.com/easy-living/images/blog-thumb3.jpg" alt=""/></a>
 <a data-slide-index="2" href=""><img src="http://rypecreative.com/easy-living/images/blog-thumb2.png" alt=""/></a>
 <a data-slide-index="3" href=""><img src="http://rypecreative.com/easy-living/images/blog-thumb4.jpg" alt=""/></a>
 </div>
 <div className="sliderControls">
 <span className="slider-prev"><a className="bx-prev" href=""><img src="http://rypecreative.com/easy-living/images/slider-prev2.png" alt="Previous"/></a></span>
 <span className="slider-next"><a className="bx-next" href=""><img src="http://rypecreative.com/easy-living/images/slider-next2.png" alt="Next"/></a></span>

 </div>
 </div>

end mostly worked...












 <div className="container">
 <div className="row">

 <div className="col-lg-9 col-md-9">
 <div className="gallery">
 <div className="bx-wrapper" style={"max-width: 100%;"}>
 <div className="bx-viewport" style={"width: 100%; overflow: hidden; position: relative; height: 355px;"}>
 <ul className="bxslider2" style={"width: 615%; position: relative; transition-duration: 0s; transform: translate3d(-848px, 0px, 0px);"}>
 <li style={"float: left; list-style: none; position: relative; width: 848px;"} className="bx-clone"><img src="images/bathroom.jpg" alt=""/></li>
 <li style={"float: left; list-style: none; position: relative; width: 848px;"}><img src="images/banner4.jpg" alt=""/></li>
 <li style={"float: left; list-style: none; position: relative; width: 848px;"}><img src="images/banner5.jpg" alt=""/></li>
 <li style={"float: left; list-style: none; position: relative; width: 848px;"}><img src="images/banner3.jpg" alt=""/></li>
 <li style={"float: left; list-style: none; position: relative; width: 848px;"}><img src="images/bathroom.jpg" alt=""/></li>
 <li style={"float: left; list-style: none; position: relative; width: 848px;"} className="bx-clone"><img src="images/banner4.jpg" alt=""/></li></ul></div><div className="bx-controls"></div></div>

 <div id="bx-pager">
 <a data-slide-index="0" href="" className="active"><img src="images/blog-thumb1.jpg" alt=""/></a>
 <a data-slide-index="1" href=""><img src="images/blog-thumb3.jpg" alt=""/></a>
 <a data-slide-index="2" href=""><img src="images/blog-thumb2.png" alt=""/></a>
 <a data-slide-index="3" href=""><img src="images/blog-thumb4.jpg" alt=""/></a>
 </div>
 <div className="sliderControls">
 <span className="slider-prev"><a className="bx-prev" href=""><img src="images/slider-prev2.png" alt="Previous"/></a></span>
 <span className="slider-next"><a className="bx-next" href=""><img src="images/slider-next2.png" alt="Next"/></a></span>
 </div>
 </div>
 <div className="row">
 <div className="col-lg-4">
 <div className="overview">
 <h4>OVERVIEW</h4>
 <ul className="overviewList">
 <li>Property Type <span>FAMILY HOUSE</span></li>
 <li>Contract Type <span>FOR SALE</span></li>
 <li>Location <span>BALTIMORE, MD</span></li>
 <li>Size <span>2,412m</span></li>
 <li>Bedrooms <span>5</span></li>
 <li>Bathrooms <span>3</span></li>
 <li>Garages <span>1</span></li>
 </ul>
 </div>
 <div id="map-canvas-one-pin" className="mapSmall" style={"position: relative; overflow: hidden; transform: translateZ(0px); background-color: rgb(229, 227, 223);"}>
 <div className="gm-style" style={"position: absolute; left: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: 0;"}>
 <div style={"position: absolute; left: 0px; top: 0px; overflow: hidden; width: 100%; height: 100%; z-index: 0; cursor: url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur) 8 8, default;"}>
 <div style={"position: absolute; left: 0px; top: 0px; z-index: 1; width: 100%; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 0, 0);"}>
 <div style={"transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;"}>
 <div style={"position: absolute; left: 0px; top: 0px; z-index: 0;"}>
 <div aria-hidden="true" style={"position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;"}>
 <div style={"width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: -176px; top: -234px;"}></div>
 <div style={"width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: -176px; top: 22px;"}></div>
 <div style={"width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 80px; top: -234px;"}></div>
 <div style={"width: 256px; height: 256px; transform: translateZ(0px); position: absolute; left: 80px; top: 22px;"}></div></div></div></div>
 <div style={"transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"}></div>
 <div style={"transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"}></div>
 <div style={"transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;"}>
 <div style={"position: absolute; left: 0px; top: 0px; z-index: -1;"}>
 <div aria-hidden="true" style={"position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;"}>
 <div style={"width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: -176px; top: -234px;"}></div>
 <div style={"width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: -176px; top: 22px;"}></div>
 <div style={"width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 80px; top: -234px;"}></div>
 <div style={"width: 256px; height: 256px; overflow: hidden; transform: translateZ(0px); position: absolute; left: 80px; top: 22px;"}>
 <canvas draggable="false" height="256" width="256" style={"-webkit-user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;"}></canvas>
 </div></div></div></div>
 <div style={"position: absolute; z-index: 0; transform: translateZ(0px); left: 0px; top: 0px;"}>
 <div style={"overflow: hidden; width: 262px; height: 200px;"}>
 <img src="https://maps.googleapis.com/maps/api/js/StaticMapService.GetMapImage?1m2&amp;1i602800&amp;2i799210&amp;2e1&amp;3u13&amp;4m2&amp;1u262&amp;2u200&amp;5m5&amp;1e0&amp;5sen-US&amp;6sus&amp;10b1&amp;12b1&amp;token=65693" style={"width: 262px; height: 200px;"}/></div></div>
 <div style={"position: absolute; left: 0px; top: 0px; z-index: 0;"}>
 <div aria-hidden="true" style={"position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;"}>
 <div style={"transform: translateZ(0px); position: absolute; left: -176px; top: -234px; transition: opacity 200ms ease-out;"}>
 <img src="https://mts0.googleapis.com/vt?pb=!1m4!1m3!1i13!2i2354!3i3121!2m3!1e0!2sm!3i323188499!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0" draggable="false" style={"position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div>
 <div style={"transform: translateZ(0px); position: absolute; left: -176px; top: 22px; transition: opacity 200ms ease-out;"}>
 <img src="https://mts0.googleapis.com/vt?pb=!1m4!1m3!1i13!2i2354!3i3122!2m3!1e0!2sm!3i323188499!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0" draggable="false" style={"position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div>
 <div style={"transform: translateZ(0px); position: absolute; left: 80px; top: -234px; transition: opacity 200ms ease-out;"}>
 <img src="https://mts1.googleapis.com/vt?pb=!1m4!1m3!1i13!2i2355!3i3121!2m3!1e0!2sm!3i323188499!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0" draggable="false" style={"position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div>
 <div style={"transform: translateZ(0px); position: absolute; left: 80px; top: 22px; transition: opacity 200ms ease-out;"}>
 <img src="https://mts1.googleapis.com/vt?pb=!1m4!1m3!1i13!2i2355!3i3122!2m3!1e0!2sm!3i323188499!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0" draggable="false" style={"position: absolute; left: 0px; top: 0px; width: 256px; height: 256px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div></div></div></div>
 <div style={"position: absolute; left: 0px; top: 0px; z-index: 2; width: 100%; height: 100%;"}></div>
 <div style={"position: absolute; left: 0px; top: 0px; z-index: 3; width: 100%; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 0, 0);"}>
 <div style={"transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"}></div>
 <div style={"transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"}></div>
 <div style={"transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"}></div>
 <div style={"transform: translateZ(0px); position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"}></div></div></div>
 <div style={"margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;"}>
 <a target="_blank" href="https://maps.google.com/maps?ll=39.29,-76.5&amp;z=13&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3"
 title="Click to see this area on Google Maps" style={"position: static; overflow: visible; float: none; display: inline;"}>
 <div style="width: 66px; height: 26px; cursor: pointer;">
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/google4.png" draggable="false" style={"position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div></a></div>
 <div style={"padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 208px; height: 148px; position: absolute; left: 5px; top: 10px; background-color: white;"}>
 <div style={"padding: 0px 0px 10px; font-size: 16px;"}>Map Data</div>
 <div style={"font-size: 13px;"}>Map data ©2015 Google</div>
 <div style={"width: 13px; height: 13px; overflow: hidden; position: absolute; opacity: 0.7; right: 12px; top: 12px; z-index: 10000; cursor: pointer;"}>
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/mapcnt6.png" draggable="false" style={"position: absolute; left: -2px; top: -336px; width: 59px; height: 492px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div></div>
 <div className="gmnoprint" style={"z-index: 1000001; position: absolute; right: 71px; bottom: 0px; width: 121px;"}>
 <div draggable="false" className="gm-style-cc" style={"-webkit-user-select: none; height: 14px; line-height: 14px;"}>
 <div style={"opacity: 0.7; width: 100%; height: 100%; position: absolute;"}>
 <div style={"width: 1px;"}></div>
 <div style={"width: auto; height: 100%; margin-left: 1px; background-color: rgb(245, 245, 245);"}></div></div>
 <div style={"position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"}>
 <a style={"color: rgb(68, 68, 68); text-decoration: none; cursor: pointer; display: none;"}>Map Data</a>
 <span style={""}>Map data ©2015 Google</span></div></div></div>
 <div className="gmnoscreen" style={"position: absolute; right: 0px; bottom: 0px;"}>
 <div style={"font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);"}>Map data ©2015 Google</div></div>
 <div className="gmnoprint gm-style-cc" draggable="false" style={"z-index: 1000001; -webkit-user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;"}>
 <div style={"opacity: 0.7; width: 100%; height: 100%; position: absolute;"}>
 <div style={"width: 1px;"}></div>
 <div style={"width: auto; height: 100%; margin-left: 1px; background-color: rgb(245, 245, 245);"}></div></div>
 <div style={"position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"}>
 <a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" style={"text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);"}>Terms of Use</a></div></div>
 <div draggable="false" className="gm-style-cc" style={"-webkit-user-select: none; height: 14px; line-height: 14px; display: none; position: absolute; right: 0px; bottom: 0px;"}>
 <div style={"opacity: 0.7; width: 100%; height: 100%; position: absolute;"}>
 <div style={"width: 1px;"}></div>
 <div style={"width: auto; height: 100%; margin-left: 1px; background-color: rgb(245, 245, 245);"}></div></div>
 <div style={"position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"}>
 <a target="_new" title="Report errors in the road map or imagery to Google" href="https://www.google.com/maps/@39.29,-76.5,13z/data=!10m1!1e1!12b1?source=apiv3&amp;rapsrc=apiv3" style={"font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); text-decoration: none; position: relative;"}>Report a map error</a></div></div>
 <div className="gmnoprint" draggable="false" controlwidth="28" controlheight="93" style={"margin: 10px; -webkit-user-select: none; position: absolute; bottom: 107px; right: 28px;"}>
 <div className="gmnoprint" controlwidth="28" controlheight="55" style={"position: absolute; left: 0px; top: 38px;"}>
 <div draggable="false" style={"-webkit-user-select: none; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; width: 28px; height: 55px; background-color: rgb(255, 255, 255);"}>
 <div title="Zoom in" style={"position: relative; width: 28px; height: 27px; left: 0px; top: 0px;"}>
 <div style={"overflow: hidden; position: absolute; width: 15px; height: 15px; left: 7px; top: 6px;"}>
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl.png" draggable="false" style={"position: absolute; left: 0px; top: 0px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; width: 120px; height: 54px;"}/></div></div>
 <div style={"position: relative; overflow: hidden; width: 67%; height: 1px; left: 16%; top: 0px; background-color: rgb(230, 230, 230);"}></div>
 <div title="Zoom out" style={"position: relative; width: 28px; height: 27px; left: 0px; top: 0px;"}>
 <div style={"overflow: hidden; position: absolute; width: 15px; height: 15px; left: 7px; top: 6px;"}>
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl.png" draggable="false" style={"position: absolute; left: 0px; top: -15px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; width: 120px; height: 54px;"}/></div></div></div></div>
 <div controlwidth="28" controlheight="28" style={"box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-radius: 2px; width: 28px; height: 28px; cursor: url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur) 8 8, default; position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255);"}>
 <div style={"position: absolute; left: 1px; top: 1px;"}></div>
 <div style={"position: absolute; left: 1px; top: 1px;"}>
 <div aria-label="Street View Pegman Control" style={"width: 26px; height: 26px; overflow: hidden; position: absolute; left: 0px; top: 0px;"}>
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/cb_scout5.png" draggable="false" style={"position: absolute; left: -147px; top: -26px; width: 215px; height: 835px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div>
 <div aria-label="Pegman is on top of the Map" style={"width: 26px; height: 26px; overflow: hidden; position: absolute; left: 0px; top: 0px; visibility: hidden;"}>
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/cb_scout5.png" draggable="false" style={"position: absolute; left: -147px; top: -52px; width: 215px; height: 835px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div>
 <div aria-label="Street View Pegman Control" style={"width: 26px; height: 26px; overflow: hidden; position: absolute; left: 0px; top: 0px; visibility: hidden;"}>
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/cb_scout5.png" draggable="false" style={"position: absolute; left: -147px; top: -78px; width: 215px; height: 835px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div></div></div>
 <div className="gmnoprint" controlwidth="28" controlheight="0" style={"display: none; position: absolute;"}>
 <div title="Rotate map 90 degrees" style={"width: 28px; height: 28px; overflow: hidden; position: absolute; border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; cursor: pointer; display: none; background-color: rgb(255, 255, 255);"}>
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl4.png" draggable="false" style={"position: absolute; left: -141px; top: 6px; width: 170px; height: 54px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div>
 <div className="gm-tilt" style={"width: 28px; height: 28px; overflow: hidden; position: absolute; border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; top: 0px; cursor: pointer; background-color: rgb(255, 255, 255);"}>
 <img src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl4.png" draggable="false" style={"position: absolute; left: -141px; top: -13px; width: 170px; height: 54px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px;"}/></div></div></div>
 <div className="gmnoprint" style={"margin: 10px; z-index: 0; position: absolute; cursor: pointer; left: 0px; top: 0px;"}>
 <div className="gm-style-mtc" style={"float: left;"}>
 <div draggable="false" title="Show street map" style={"direction: ltr; overflow: hidden; text-align: center; position: relative; color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; padding: 8px; border-bottom-left-radius: 2px; border-top-left-radius: 2px; -webkit-background-clip: padding-box; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; min-width: 21px; font-weight: 500; background-color: rgb(255, 255, 255); background-clip: padding-box;"}>Map</div>
 <div style={"z-index: -1; padding: 2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; position: absolute; left: 0px; top: 31px; text-align: left; display: none; background-color: white;"}>
 <div draggable="false" title="Show street map with terrain" style={"color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; padding: 6px 8px 6px 6px; direction: ltr; text-align: left; white-space: nowrap; background-color: rgb(255, 255, 255);"}>
 <span role="checkbox" style={"box-sizing: border-box; position: relative; line-height: 0; font-size: 0px; margin: 0px 5px 0px 0px; display: inline-block; border: 1px solid rgb(198, 198, 198); border-radius: 1px; width: 13px; height: 13px; vertical-align: middle; background-color: rgb(255, 255, 255);"}>
 <div style={"position: absolute; left: 1px; top: -2px; width: 13px; height: 11px; overflow: hidden; display: none;"}>
 <img src="https://maps.gstatic.com/mapfiles/mv/imgs8.png" draggable="false" style={"position: absolute; left: -52px; top: -44px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; width: 68px; height: 67px;"}/></div></span>
 <label style={"vertical-align: middle; cursor: pointer;"}>Terrain</label></div></div></div>
 <div className="gm-style-mtc" style={"float: left;"}>
 <div draggable="false" title="Show satellite imagery" style={"direction: ltr; overflow: hidden; text-align: center; position: relative; color: rgb(86, 86, 86); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; padding: 8px; border-bottom-right-radius: 2px; border-top-right-radius: 2px; -webkit-background-clip: padding-box; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; border-left-width: 0px; min-width: 39px; background-color: rgb(255, 255, 255); background-clip: padding-box;"}>Satellite</div>
 <div style={"z-index: -1; padding: 2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px; position: absolute; right: 0px; top: 31px; text-align: left; display: none; background-color: white;"}>
 <div draggable="false" title="Show imagery with street names" style={"color: rgb(0, 0, 0); font-family: Roboto, Arial, sans-serif; -webkit-user-select: none; font-size: 11px; padding: 6px 8px 6px 6px; direction: ltr; text-align: left; white-space: nowrap; background-color: rgb(255, 255, 255);"}>
 <span role="checkbox" style={"box-sizing: border-box; position: relative; line-height: 0; font-size: 0px; margin: 0px 5px 0px 0px; display: inline-block; border: 1px solid rgb(198, 198, 198); border-radius: 1px; width: 13px; height: 13px; vertical-align: middle; background-color: rgb(255, 255, 255);"}>
 <div style={"position: absolute; left: 1px; top: -2px; width: 13px; height: 11px; overflow: hidden;"}>
 <img src="https://maps.gstatic.com/mapfiles/mv/imgs8.png" draggable="false" style={"position: absolute; left: -52px; top: -44px; -webkit-user-select: none; border: 0px; padding: 0px; margin: 0px; width: 68px; height: 67px;"}/></div></span>
 <label style={"vertical-align: middle; cursor: pointer;"}>Labels</label></div></div></div></div></div></div>
 </div>
 <div className="col-lg-8">
 <p className="price" style={"float:right;"}>$687,000</p>
 <p className="forSale" style={"float:right; margin-right:20px;"}>FOR SALE</p>
 <h1>587 Smith Avenue</h1>
 <p>Baltimore, MD</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula dapibus
 mauris, quis ullamcorper enim aliquet sed. Maecenas quis eget tellus dui. Vivamus
 condimentum egestas.</p>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod
 sollicitudin nunc, eget pretium massa. Ut sed adipiscing enim, pellentesque ultrices
 erat. Integer placerat felis neque, et semper augue ullamcorper in. Pellentesque
 iaculis leo iaculis aliquet ultrices. Suspendisse potenti. Aenean ac magna faucibus,
 consectetur ligula vel, feugiat est. Nullam imperdiet semper neque eget euismod.
 Nunc commodo volutpat semper.</p><br/>
 <h4>GENERAL AMENTITIES</h4>
 <div className="divider thin"></div>
 <table className="amentitiesTable">
 <tbody><tr>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Air Conditioning</td>
 <td><img className="icon" src="images/icon-cross.png" alt=""/>Coffee Pot</td>
 <td><img className="icon" src="images/icon-cross.png" alt=""/>Heating</td>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Parking</td>
 </tr>
 <tr>
 <td><img className="icon" src="images/icon-cross.png" alt=""/>Balcony</td>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Dishwasher</td>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Internet</td>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Pool</td>
 </tr>
 <tr>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Bedding</td>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Fridge</td>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Microwave</td>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Terrance</td>
 </tr>
 <tr>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Cable TV</td>
 <td><img className="icon" src="images/icon-cross.png" alt=""/>Grill</td>
 <td><img className="icon" src="images/icon-check.png" alt=""/>Oven</td>
 <td><img className="icon" src="images/icon-cross.png" alt=""/>Toaster</td>
 </tr>
 </tbody></table>
 <br />
 </div>
 </div>

 <h4>RELATED PROPERTIES</h4>
 <div className="divider thin"></div>
 <div className="row">
 <div className="col-lg-4 col-md-4 col-sm-6">
 <div className="propertyItem">
 <div className="propertyContent">
 <a className="propertyType" href="#">FAMILY HOME</a>
 <a href="property_single.html" className="propertyImgLink"><img className="propertyImg" src="images/home3.jpg" alt=""/></a>
 <h4><a href="property_single.html">587 Smith Avenue</a></h4>
 <p>Baltimore, MD</p>
 <div className="divider thin"></div>
 <p className="forSale">FOR SALE</p>
 <p className="price">$687,000</p>
 </div>
 <table border="1" className="propertyDetails">
 <tbody><tr>
 <td><img src="images/icon-area.png" alt="" style={"margin-right:7px;"}/>2,412m</td>
 <td><img src="images/icon-bed.png" alt="" style={"margin-right:7px;"}/>6 Beds</td>
 <td><img src="images/icon-drop.png" alt="" style={"margin-right:7px;"}/>3 Baths</td>
 </tr>
 </tbody></table>
 </div>
 </div>
 <div className="col-lg-4 col-md-4 col-sm-6">
 <div className="propertyItem">
 <div className="propertyContent">
 <span className="openHouse">OPEN HOUSE</span>
 <a className="propertyType" href="#">APARTMENT</a>
 <a href="property_single.html" className="propertyImgLink"><img className="propertyImg" src="images/home1.jpg" alt=""/></a>
 <h4><a href="property_single.html">587 Smith Avenue</a></h4>
 <p>Baltimore, MD</p>
 <div className="divider thin"></div>
 <p className="forSale">FOR RENT</p>
 <p className="price">$1,200/mo</p>
 </div>
 <table border="1" className="propertyDetails">
 <tbody><tr>
 <td><img src="images/icon-area.png" alt="" style={"margin-right:7px;"}/>2,412m</td>
 <td><img src="images/icon-bed.png" alt="" style={"margin-right:7px;"}/>6 Beds</td>
 <td><img src="images/icon-drop.png" alt="" style={"margin-right:7px;"}/>3 Baths</td>
 </tr>
 </tbody></table>
 </div>
 </div>
 <div className="col-lg-4 col-md-4 col-sm-6">
 <div className="propertyItem">
 <div className="propertyContent">
 <a className="propertyType" href="#">FAMILY HOME</a>
 <a href="property_single.html" className="propertyImgLink"><img className="propertyImg" src="images/home2.jpg" alt=""/></a>
 <h4><a href="property_single.html">587 Smith Avenue</a></h4>
 <p>Baltimore, MD</p>
 <div className="divider thin"></div>
 <p className="forSale">FOR SALE</p>
 <p className="price">$687,000</p>
 </div>
 <table border="1" className="propertyDetails">
 <tbody><tr>
 <td><img src="images/icon-area.png" alt="" style={"margin-right:7px;"}/>2,412m</td>
 <td><img src="images/icon-bed.png" alt="" style={"margin-right:7px;"}/>6 Beds</td>
 <td><img src="images/icon-drop.png" alt="" style={"margin-right:7px;"}/>3 Baths</td>
 </tr>
 </tbody></table>
 </div>
 </div>
 </div>

 </div>


 <div className="col-lg-3 col-md-3">
 <h3>QUICK SEARCH</h3>
 <div className="divider"></div>
 <div className="filterContent defaultTab sidebarWidget">
 <form method="post" action="#">
 <div className="row">
 <div className="col-lg-12 col-md-12 col-sm-6">
 <div className="formBlock select">
 <label for="propertyType">Property Type</label><br/>
 <select name="property type" id="propertyType" className="formDropdown">
 <option value="">Any</option>
 <option value="Country2">Family Home</option>
 <option value="Country3">Apartment</option>
 <option value="Country4">Condo</option>
 <option value="Country5">Villa</option>
 </select>
 </div>
 </div>
 <div className="col-lg-12 col-md-12 col-sm-6">
 <div className="formBlock select">
 <label for="location">Location</label><br/>
 <select name="location" id="location" className="formDropdown">
 <option value="">Any</option>
 <option value="Country2">Option 1</option>
 <option value="Country3">Option 2</option>
 <option value="Country4">Option 3</option>
 <option value="Country5">Option 4</option>
 </select>
 </div>
 </div>
 <div className="col-lg-12 col-md-12 col-sm-6">
 <div className="formBlock select">
 <label for="price">Price Range</label><br/>
 <select name="price" id="price" className="formDropdown">
 <option value="">Any</option>
 <option value="Country2">Option 1</option>
 <option value="Country3">Option 2</option>
 <option value="Country4">Option 3</option>
 <option value="Country5">Option 4</option>
 </select>
 </div>
 </div>
 <div className="col-lg-12 col-md-12 col-sm-6">
 <div className="formBlock">
 <input className="buttonColor" type="submit" value="FIND PROPERTIES" style={"margin-top:24px;"}/>
 </div>
 </div>
 <div style={"clear:both;"}></div>
 </div>
 </form>
 </div>

 <h3>RECENT POSTS</h3>
 <div className="divider"></div>
 <div className="recentPosts sidebarWidget">
 <h4><a href="#">AWESOME DREAM HOUSE IN A GREAT LOCATION</a></h4>
 <a href="#">READ MORE</a>
 <p className="date">Feb 5, 2014</p>
 <div style={"clear:both;"}></div>
 <div className="divider thin"></div>
 <h4><a href="#">AWESOME DREAM HOUSE IN A GREAT LOCATION</a></h4>
 <a href="#">READ MORE</a>
 <p className="date">Feb 5, 2014</p>
 <div style={"clear:both;"}></div>
 <div className="divider thin"></div>
 <h4><a href="#">AWESOME DREAM HOUSE IN A GREAT LOCATION</a></h4>
 <a href="#">READ MORE</a>
 <p className="date">Feb 5, 2014</p>
 <div style={"clear:both;"}></div>
 </div>

 <h3>PROPERTY TYPES</h3>
 <div className="divider"></div>
 <div className="propertyTypesWidget sidebarWidget">
 <ul>
 <li><h4><a href="#">FAMILY HOUSE</a></h4></li>
 <li><h4><a href="#">SINGLE HOUSE</a></h4></li>
 <li><h4><a href="#">APARTMENT</a></h4></li>
 <li><h4><a href="#">CONDO</a></h4></li>
 <li><h4><a href="#">VILLA</a></h4></li>
 <li><h4><a href="#">OFFICE BUILDING</a></h4></li>
 </ul>
 </div>

 </div>
 </div>
 </div>

 */