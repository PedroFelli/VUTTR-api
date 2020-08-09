import IToolRespository from '../repositories/IToolRepository';

import IDataDTO from '../models/IToolDTO';

class FindByTagToolService {
  constructor(private toolRepository: IToolRespository) {}

  async execute(tag: string): Promise<IDataDTO[] | undefined> {
    const tools = await this.toolRepository.findByTag(tag);

    return tools;
  }
}

export default FindByTagToolService;
