import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ComponentEntity } from './entities/component.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AppComponentEntity } from './entities/appcomponent.entity';


@Injectable()
export class ComponentService {
  constructor(
    @InjectRepository(ComponentEntity) private components: Repository<ComponentEntity>,
    @InjectRepository(AppComponentEntity) private appcomponents: Repository<AppComponentEntity>
  ) { }

  async getAllComponents(appId: string, userId: string,) {
    const components = await this.components.find({ where: { userId, appId } });
    return components;
  }

  async getComponent(id: string, appId: string, userId: string) {
    const component = await this.components.findOne({ where: { id, userId, appId } });
    if (!component) throw new NotFoundException("No Component Found");
    return component;
  }

  async createComponent(appId: string, content: any, userId: string) {
    const name = content.name;
    const type = content.component;
    const component = await this.components.create({ name, component: type, userId, appId });
    Object.assign(component, content);
    // console.log(component);
    const componentSave = await this.components.save(component);
    // console.log(componentSave);

    return componentSave;
  }

  async updateComponent(id: string, appId: string, attr: Partial<ComponentEntity>, userId: string) {
    const findComponent = await this.components.exists({ where: { id, userId, appId } })
    if (!findComponent) throw new NotFoundException("No Component Found");
    const component = await this.components.findOne({ where: { id, userId, appId } });
    console.log("attr: ", attr);
    Object.assign(component, attr);
    // console.log(component);
    return await this.components.save(component);
  }

  async deleteComponent(id: string, appId: string, userId: string) {
    const findComponent = await this.components.exists({ where: { id, userId, appId } })
    if (!findComponent) throw new NotFoundException("No Component Found");
    const deleteComponent = await this.components.delete(id);
    return { msg: "Component Deleted Successfully" };
  }

  async saveComponent({ appId, data }: any) {
    console.log("data: ",data)
    const save = await this.appcomponents.findOne({ where: { appId } });
    if (save) await this.appcomponents.delete(appId);
    const newsave = await this.appcomponents.create({ appId, data });
    return await this.appcomponents.save(newsave);
  }

  async getSaveComponents(appId: string) {
    const compo = await this.appcomponents.findOne({ where: { appId } });
    console.log("compo" + compo);
    return compo;
  }
}
