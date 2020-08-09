import { uuid } from 'uuidv4';
import Tool, { ITool, ToolDocument } from '../../models/Tools';
import ToolDTO from '../../models/IToolDTO';
import IToolRepository from '../IToolRepository';

class ToolRepository implements IToolRepository {
  private tools: ITool[] = [];

  public async create(data: ToolDocument): Promise<ToolDTO> {
    const tool = new Tool();

    tool.id = uuid();
    tool.title = data.title;
    tool.description = data.description;
    tool.link = data.link;
    tool.tags = data.tags;

    this.tools.push(tool);

    return tool;
  }

  public async getAll(): Promise<ToolDTO[] | undefined> {
    const { tools } = this;

    return tools;
  }

  public async delete(id: string): Promise<void> {
    const findTool = this.tools.find(tool => tool.id === id);

    this.tools.filter(tool => tool === findTool);
  }

  public async findById(id: string): Promise<ToolDTO | null> {
    const findTool = this.tools.find(tool => tool.id === id);

    if (findTool === undefined) {
      return null;
    }

    return findTool;
  }

  public async findByTitle(title: string): Promise<ToolDTO | null> {
    const findTool = await this.tools.find(tool => tool.title === title);

    if (findTool === undefined) {
      return null;
    }
    return findTool;
  }

  public async findByTag(findTag: string): Promise<ToolDTO[] | undefined> {
    const findTools = this.tools.filter(tool => tool.tags.includes(findTag));

    return findTools;
  }
}

export default ToolRepository;
