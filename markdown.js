import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
const initialText=`# Welcome!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.use({
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: false,
  smartypants: false,
  xhtml: false
});

class Markdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: initialText
    };
    this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount() {
    document.getElementById("editor").defaultValue = initialText;
  }

  handleChange(event){
    this.setState(
      {
        input:event.target.value
      }
    );
  }
  render(){
    return (
      <div class="row">
        <div class="col-xs-6">
          <div class="leftWrapper">
            <h1 class="markdownHeader">Editor</h1>
            <hr class="line" />
            <textarea id="editor" onChange={this.handleChange}/>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="rightWrapper">
            <h1 class="markdownHeader">Previewer</h1>
            <hr class="line" />
            <div id="wrapPreview">
              <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Markdown />, document.getElementById("root"));
