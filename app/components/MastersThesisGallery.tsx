'use client'

import { ImageGalleryComponent } from './ui/ImageGallery'

const mastersThesisImages = [
  {
    src: '/master_thesis/structurizr-100399-GameSystemContext.png',
    title: 'System Context Diagram',
    description: 'C4 Level 1: Shows the Unity game system and its interactions with external actors and systems'
  },
  {
    src: '/master_thesis/structurizr-100399-UnityContainers.png',
    title: 'Unity Container Diagram',
    description: 'C4 Level 2: Unity application containers and their responsibilities within the game system'
  },
  {
    src: '/master_thesis/structurizr-100399-LangChainContainers.png',
    title: 'LangChain Container Diagram',
    description: 'C4 Level 2: Agent framework containers showing LangGraph and ReAct implementations'
  },
  {
    src: '/master_thesis/structurizr-100399-KnowledgeGraphComponents.png',
    title: 'Knowledge Graph Components',
    description: 'C4 Level 3: Neo4j database components and vector embedding subsystems'
  },
  {
    src: '/master_thesis/structurizr-100399-ReActGraphComponents.png',
    title: 'ReAct Agent Components',
    description: 'C4 Level 3: Reasoning and Acting framework components with tool integration'
  },
  {
    src: '/master_thesis/structurizr-100399-ToolsComponents.png',
    title: 'Tool System Components',
    description: 'C4 Level 3: Static and dynamic tool components with method invocation system'
  }
]

export function MastersThesisGallery() {
  return (
    <ImageGalleryComponent 
      images={mastersThesisImages}
      title="C4 Architecture Diagrams"
    />
  )
}