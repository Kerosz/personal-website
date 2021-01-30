// libraries
import Image from 'next/image';
import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { imageBuilder } from 'sanity';
import { IStudycase } from '@lib/api';
import { Container, Text } from '@lib/ui';
// styles
import { ImageContainer } from './studycase.styles';

const MotionImageContainer = motion.custom(ImageContainer);

const Studycase: FC<{ data: IStudycase }> = memo(({ data }) => {
  return (
    <>
      <Container fluid padding='0px'>
        <MotionImageContainer layoutId={data._id}>
          <Image
            src={imageBuilder.image(data.src).url() as string}
            alt={data.name}
            layout='fill'
            objectFit='cover'
          />
        </MotionImageContainer>
      </Container>
      <Container maxW='87.5%'>
        <Text component='h1'>{data.name}</Text>
      </Container>
    </>
  );
});

export default Studycase;
