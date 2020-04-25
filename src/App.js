import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    gundam_00: {
      series: "機動戦士ガンダム00",
      models: [
        {
          src: "/img/gn-001_rg_144/P_20160821_212514_edit.jpg",
          title: "RG 1/144 GN-001 Exia",
        },
        {
          src: "/img/gn-002_100/CplcFjRVMAMiLWn.jpg",
          title: "1/100 GN-002 Dynames",
        },
        {
          src: "/img/gn-003_100/CpLbmwpUkAAR33n.jpg",
          title: "1/100 GN-003 Kyrios",
        },
        {
          src: "/img/gn-005_100/P_20160814_221712_1_edit.jpg",
          title: "1/100 GN-005 Virtue",
        },
        {
          src: "/img/gn-005_144/P_20180623_152714_1.jpg",
          title: "HG 1/144 GN-005 Virtue",
        },
        {
          src: "/img/gnw-001_144/P_20170528_225712.jpg",
          title: "1/144 GNW-001 Throne Eins",
        },
        {
          src: "/img/gnw-002_144/P_20170614_231850.jpg",
          title: "1/144 GNW-002 Throne Zwei",
        },
        {
          src: "/img/gn-007_144/P_20180826_181938_1.jpg",
          title: "HG 1/144 GN-007 Arios",
        },
        {
          src: "/img/gn-008_100/P_20161204_201743_edit.jpg",
          title: "1/100 GN-008 SERAVEE",
        }
      ],
    },
  };

  render() {
    let seriesList = [];
    for(let key in this.state){
      let modelList = [];
      for (let i = 0; i < this.state[key].models.length; i++) {
        modelList.push(
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                border: "1px solid #444444",
                marginBottom: 3,
                marginRight: 3,
                width: 100,
              }}
            >
              <img
                style={{
                  width: 100,
                  height: 200,
                  objectFit: "cover",
                }}
                src={this.state[key].models[i].src}
              />
  
              <div
                style={{
                  overflow: "hidden",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  background: "rgba(140, 140, 140, 0.78)",
                  fontSize: 14,
                  //color:'white',
                  fontWeight: "bold",
                  height: 40,
                  width: 100,
                }}
              >
                {this.state[key].models[i].title}
              </div>
            </div>
          </div>
        );
      }
      seriesList.push(
        <div>
          <div>{this.state[key].series}</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >{modelList}</div>
        </div>
      );
    }
    
    return (
      <div
        style={{
          
          width: "100vw",
        }}
      >
        {seriesList}
      </div>
    );
  }
}

export default App;
