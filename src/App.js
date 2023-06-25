import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
class App extends Component {
  render() {
    return (
      <div class="app">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For  UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperTextMarkupLanguage."></Content>
      </div>
    );
  }
}

export default App;
