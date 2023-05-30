import { MicroframeworkLoader } from 'microframework-w3tec';
import { useContainer as routingUseContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { useContainer as ormUseContainer } from 'typeorm';

export const iocLoader: MicroframeworkLoader = () => {

    /**
     * Setup routing-controllers to use typedi container.
     */
    routingUseContainer(Container);
    /**
     * Setup typeorm to use typedi container.
     */
    ormUseContainer(Container);
};
