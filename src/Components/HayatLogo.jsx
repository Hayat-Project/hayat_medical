import { Image } from '@mantine/core';

function HayatLogo(props) {
    return (
        <Image
            radius="md"
            w={130}
            h={30}
            src={props.image}
        />
    );
}

export default HayatLogo;