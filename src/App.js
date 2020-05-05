import React from "react";
import "./App.css";
import { data } from "./models";

class App extends React.Component {
  state = {
    selectGrade: ["HG", "MG", "RG"],
    selectScale: [100,144, "NON SCALE", 72, 48,60],
  };

  isDuplicate = (array, obj) => {
    let newArray = array.filter((elm) => {
      return elm === obj;
    });
    if (newArray.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    let seriesList = [];
    for (let key in data) {
      let modelList = [];
      let models = data[key].models.filter((elm) => {
        return (this.state.selectGrade.includes(elm.grade)
                && this.state.selectScale.includes(elm.scale))
      });
      for (let i = 0; i < models.length; i++) {
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
                className={
                  models[i].built !== false
                    ? "image_style"
                    : "image_style not_built"
                }
                src={models[i].src}
              />

              <div
                style={{
                  overflow: "hidden",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  background: "rgba(140, 140, 140, 0.78)",
                  fontSize: 15,
                  color: "#d0d0d0",
                  fontWeight: "bold",
                  height: 70,
                  width: 100,
                  textAlign: "center",
                  textShadow: "1px 1px 1px black",
                }}
              >
                <div
                  style={{
                    margin: 5,
                  }}
                >
                  <span className={"badge grade " + models[i].grade}>
                    {models[i].grade}
                  </span>
                  <span className={"badge scale _" + models[i].scale}>
                    1/{models[i].scale}
                  </span>
                </div>
                {models[i].name}
              </div>
            </div>
          </div>
        );
      }
      seriesList.push(
        <div>
          <div className="series_title">{data[key].series}</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: 5,
            }}
          >
            {modelList}
          </div>
        </div>
      );
    }

    let gChecks = [];
    let sChecks = [];
    let gradeChecks = [
      {
        label: "HG",
      },
      {
        label: "MG",
      },
      {
        label: "RG",
      },
    ];
    let scaleChecks = [
      {
        label: 100,
      },
      {
        label: 144,
      },
      {
        label: 48,
      },
      {
        label: 72,
      },
      {
        label: "NON SCALE",
      },
      {
        label: 60,
      },
    ];
    for (let k = 0; k < gradeChecks.length; k++) {
      gChecks.push(
        <span>
          <input
            type="checkbox"
            checked={this.state.selectGrade.includes(gradeChecks[k].label)}
            onChange={() => {
              let selectGrade = this.state.selectGrade;
              let newArray = [];
              if (this.isDuplicate(selectGrade, gradeChecks[k].label)) {
                //要素を削除
                newArray = selectGrade.filter((elm) => {
                  return elm !== gradeChecks[k].label;
                });
                this.setState({
                  selectGrade: newArray,
                });
              } else {
                //要素を追加
                selectGrade.push(gradeChecks[k].label);
                this.setState({
                  selectGrade: selectGrade,
                });
              }
              console.log(this.state);
            }}
          />
          {gradeChecks[k].label}
        </span>
      );
    }
    for (let l = 0; l < scaleChecks.length; l++) {
      sChecks.push(
        <span>
          <input
            type="checkbox"
            checked={this.state.selectScale.includes(scaleChecks[l].label)}
            onChange={() => {
              let selectScale = this.state.selectScale;
              let newArray = [];
              if (this.isDuplicate(selectScale, scaleChecks[l].label)) {
                //要素を削除
                newArray = selectScale.filter((elm) => {
                  return elm !== scaleChecks[l].label;
                });
                this.setState({
                  selectScale: newArray,
                });
              } else {
                //要素を追加
                selectScale.push(scaleChecks[l].label);
                this.setState({
                  selectScale: selectScale,
                });
              }
              console.log(this.state);
            }}
          />
          1/{scaleChecks[l].label}
        </span>
      );
    }

    return (
      <div
        style={{
          width: "100vw",
        }}
      >
        <h1>お前の積みプラを数えろ!</h1>
        <div>
          ブラックアウトしているものは積んでいるか、
          <br />
          かつて作って手放したもの
        </div>
        <div>{gChecks}</div>
        <div>{sChecks}</div>
        {seriesList}
      </div>
    );
  }
}

export default App;
