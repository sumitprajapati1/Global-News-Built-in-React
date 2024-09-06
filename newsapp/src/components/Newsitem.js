import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title ,description,imageUrl,newsUrl}=this.props;
    let defaultImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAACUCAMAAABY+0dBAAAAD1BMVEXy8vL////29vb5+fn8/Px3yyzeAAACS0lEQVR4nO2c7Y6CMBBFcdr3f+YVWpCWfqFuNnt7zh8TBJIe651pNSwLAAAAAAAAAAAAAAAAAAAAAAAAwC/z+Brur4fyGYiIICKyjsA+xyuIsC/cRkLEN0aAiAgiIoiIICIiKcLMuWdJvXUbRRHOhwbJ31GhJ8L8W72inog3u2Y5ET4RMd50qomwbCHlR2+jJiKbEONTQk3EZW2NiJtxiYiIvIhZvxqEZWS4fLqsAVcTkU+J2lWWO5ITYYmJ2ti2sxITciLGFl3+8raeiMXcng/VoNxdWXJITUR/Y2Y3dVYlKaLDqbK8TEwoIqmwx6XziUjLynHtfCLy3tOOw3OJcI+cYGI2EXkLfvRVk4koeIgm5hJR9BCu1xfhW7sVLxPyItypkb5sVpwCU12EnSrktWC8YkLjr0P1EdipLjQ8PE/RFrGH414X2giL8OcxVkrGDCJOX4Y1JnomZEUkoWD5gXlEpBNg23lox4SoiGy5PWBCU0TuIZaO+UQUPvutdDTmhKSIYi52SoeiiEp9aJcOQRHVj319s2pCUEQ1CJq9tp6IRiC2SoeciGYD6eI1E4gYaKTLGSImorvIrJYOLRFdDyEmSia0RHQ9BBOlDlNKRCcgmiaURAx5qAWmkIh+QESKgakjorW0HDChI2LcQzCRnS8jYjAgAoVVh4qIWx5K2zQiIoaDMjGhJ+K2h+uGlYaI5yTf/lacvfjG0W2bxnxARsSnSPwIzIM0VtYZwaNVFh62c4CICCIAAAAAAAAAAAAAAAAAAAAAAADg//ADWzkP4LXpARUAAAAASUVORK5CYII=";
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
          <img src={imageUrl?imageUrl:defaultImage} className="card-img-top" alt="Default Image"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl?newsUrl:" "} target='#blank' className="btn btn-primary">Read More...</a>
            </div>
        </div> 
      </div>
    )
  }
}

export default Newsitem
