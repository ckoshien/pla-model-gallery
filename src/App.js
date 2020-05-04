import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    gundam_seed:{
      series:'機動戦士ガンダムSEED',
      models:[
        {
          src:'https://bandai-hobby.net/images/153_880_s_438v1owxnhmx5s2z3iqreiwrlvay.jpg',
          title: 'MG 1/100 GAT-X105 Strike'
        },
        {
          src:'https://bandai-hobby.net/images/153_326_s_aio3s4xq0wlothvi9gh8wvp5carx.jpg',
          title: '1/100 GAT-X303 Aegis',
          built:false
        },
        {
          src:'https://bandai-hobby.net/images/153_335_s_ppn8ht4jeclr10t0fyhofpse6bz6.jpg',
          title: '1/100 GAT-X103 Buster',
          built:false
        },
        {
          src:'https://bandai-hobby.net/images/153_350_s_arrmrqkhfs99ahglsycbyab19i1q.jpg',
          title: '1/100 GAT-X102 Duel Assault Shroud'
        },
        {
          src:'https://bandai-hobby.net/images/153_392_s_enav1qgyd4r7ao22i2bn767fbqot.jpg',
          title: '1/100 GAT-X207 Blitz',
          built:false
        },
        {
          src:'https://bandai-hobby.net/images/153_1502_s_iko0dwyhjs1ua6o0h5zpsqsfkfrc.jpg',
          title: 'MG 1/100 ZGMF-X10A Freedom ver1.0'
        },
        {
          src:'https://bandai-a.akamaihd.net/bc/img/model/b/1000136428_1.jpg',
          title: 'RG 1/144 ZGMF-X10A Freedom',
          built:false
        },
        {
          src:'https://bandai-hobby.net/images/153_365_s_5uribxax1ysi5jdu7gwck9axuunr.jpg',
          title: '1/100 ZGMF-X09A Justice',
          built:false
        },
        {
          src:'./img/zgmf-x09a_rg_144/CjDmf1FUoAANrwE.jpg',
          title: 'RG 1/144 ZGMF-X09A Justice'
        },
        {
          src:'https://bandai-hobby.net/images/153_1773_s_cdbkehcq8m9hp49wdijqrbvuagc2.jpg',
          title: '1/100 ZGMF-X13A Providence'
        },
        {
          src:'./img/gat-x131_144/P_20160918_222942_edit.jpg',
          title: 'HG 1/144 GAT-X131 Calamity'
        },
        {
          src:'./img/gat-x370_144/P_20160922_183201_edit.jpg',
          title: 'HG 1/144 GAT-X370 Raider'
        },
        {
          src:'https://bandai-hobby.net/images/153_2554_s_llxdpwcln9rckapec8c8mq0z2ut6.jpg',
          title: 'MG 1/100 GAT-X105E STRIKE NOIR',
          built:false
        }
      ]
    },
    gundam_seed_destiny:{
      series:'機動戦士ガンダムSEED DESTINY',
      models:[
        {
          src: "https://bandai-a.akamaihd.net/bc/img/model/b/1000136416_1.jpg",
          title: "MG 1/100 ZGMF-X56S SWORD IMPULSE",
          built:false
        },
        {
          src: "./img/zgmf-x23s_100/main.jpg",
          title: "1/100 ZGMF-X23S SAVIOUR",
        },
        {
          src: "./img/zgmf-x24s_100/main.jpg",
          title: "1/100 ZGMF-X24S CHAOS",
        },
        {
          src: "./img/zgmf-x31s_144/main.jpg",
          title: "HG 1/144 ZGMF-X31S ABYSS",
        },
        {
          src: "./img/zgmf-1000_100/main.jpg",
          title: "1/100 ZGMF-1000 ZAKU WARRIOR",
        },
        {
          src: "./img/zgmf-x2000_144/main.jpg",
          title: "1/100 ZGMF-X2000 GOUF IGNITED",
        },
        {
          src: "./img/zgmf-x19a_100/main.jpg",
          title: "1/100 ZGMF-X19A ∞JUSTICE",
        },
        {
          src: "./img/zgmf-x666s_100/main.jpg",
          title: "1/100 ZGMF-X666S LEGEND",
        },
        
        {
          src: "./img/zgmf-x20a_mg_100/main.jpg",
          title: "MG 1/100 ZGMF-X20A STRIKE FREEDOM",
        },
        {
          src: "https://bandai-hobby.net/images/153_973_s_7kvclzya4wkbhjzg1kyfe0mukytc.jpg",
          title: "RG 1/144 ZGMF-X20A STRIKE FREEDOM",
          built:false
        },
        {
          src: "./img/zgmf-x20a_hgce_144/main.jpg",
          title: "HGCE 1/144 ZGMF-X20A STRIKE FREEDOM"
        },
        {
          src: "https://bandai-hobby.net/images/153_872_o_1ddksev8t1kb2fri1lij1ktu1f7u23.jpg",
          title: "RG 1/144 ZGMF-X42S DESTINY",
          built:false
        },
        {
          src: "./img/zgmf-x42s_hgce_144/main.jpg",
          title: "HGCE 1/144 ZGMF-X42S DESTINY",
        },
      ]
    },
    gundam_00_1st: {
      series: "機動戦士ガンダム00 1st season",
      models: [
        {
          src: "./img/gn-001_rg_144/P_20160821_212514_edit.jpg",
          title: "RG 1/144 GN-001 Exia",
        },
        {
          src: "./img/gn-002_100/CplcFjRVMAMiLWn.jpg",
          title: "1/100 GN-002 Dynames",
        },
        {
          src: "./img/gn-003_100/CpLbmwpUkAAR33n.jpg",
          title: "1/100 GN-003 Kyrios",
        },
        {
          src: "./img/gn-005_100/P_20160814_221712_1_edit.jpg",
          title: "1/100 GN-005 Virtue",
        },
        {
          src: "./img/gn-005_144/P_20180623_152714_1.jpg",
          title: "HG 1/144 GN-005 Virtue",
        },
        {
          src: "./img/gnw-001_144/P_20170528_225712.jpg",
          title: "1/144 GNW-001 Throne Eins",
        },
        {
          src: "./img/gnw-002_144/P_20170614_231850.jpg",
          title: "1/144 GNW-002 Throne Zwei",
        },
        {
          src: "./img/svms-01o/P_20170326_204214_edit.jpg",
          title: "1/100 SVMS-01O Over Flag",
        },
        {
          src: "https://bandai-hobby.net/images/155_1888_o_1bbm1dobjbnmahhbu556v1h282d.jpg",
          title: "HG 1/144 GN-001/hs-A01D Avalanche",
          built:false
        }
      ],
    },
    gundam_00_2nd:{
      series:'機動戦士ガンダム00 2nd season',
      models:[
        {
          src: "./img/gn-0000_rg_144/P_20160904_192250_edit.jpg",
          title: "HG 1/144 GN-0000 00 Raiser",
        },
        {
          src: "./img/gn-006_100/P_20160821_194018_1.jpg",
          title: "1/100 GN-006 Cherudim",
        },
        {
          src: "./img/gn-007_144/P_20180826_181938_1.jpg",
          title: "HG 1/144 GN-007 Arios",
        },
        {
          src: "./img/gn-008_100/P_20161204_201743_edit.jpg",
          title: "1/100 GN-008 SERAVEE",
        },
        {
          src: "./img/gn-008gnhwb_144/81640348_125288462296131_7026885342011029578_n.jpg",
          title: "HG 1/144 GN-008 SERAVEE GNHW/B",
        },
        {
          src: "./img/cb-0000g_144/P_20170701_210050.jpg",
          title: "HG 1/144 CB-0000G/C Reborns",
        },
      ]
    },
    gundam_00_cinema:{
      series:'機動戦士ガンダム00 劇場版',
      models:[
        {
          src: "https://bandai-hobby.net/images/153_3686_o_1dt5bks323681r9p1h1eul7cj023.jpg",
          title: "HG 1/144 GN-011 Harute",
          built:false
        }
      ]
    }
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
                className={this.state[key].models[i].built !== false ? 'image_style' : 'image_style not_built'}
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
                  height: 50,
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
          <div className="series_title">{this.state[key].series}</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin:5
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
        <h1>お前の罪(積みプラ)を数えろ!</h1>
        <div>ブラックアウトしているものは積んでいるか、かつて作って手放したもの</div>
        {seriesList}
      </div>
    );
  }
}

export default App;
