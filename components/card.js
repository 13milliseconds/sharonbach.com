import React from "react";
import Image from "./image";
import { useRouter } from 'next/router'

const Card = (props)=>{
    
    const router = useRouter()
    let project = props.project;

    return (
      <div className="project-card" onClick={() => router.push(`?project=${project.attributes.slug}`)}>
        <a className="uk-link-reset">
          <div className="uk-card uk-card-muted">
            <div className="uk-card-media-top"><Image image={project.attributes.featuredImage} /></div>
          </div>
          <div className="caption">
            <h3 className="title">{project.attributes.title}</h3>
            <div className="blurb">{project.attributes.blurb}</div>
          </div>
        </a>
      </div>
    )
};

export default Card;