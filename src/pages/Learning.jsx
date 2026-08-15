import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Box from "@cloudscape-design/components/box";
import Badge from "@cloudscape-design/components/badge";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Grid from "@cloudscape-design/components/grid";

const nnArchitectures = [
  { name: "AlexNet", description: "Pioneering deep CNN for image classification (2012)." },
  { name: "VGG-16/19", description: "Deep CNN with small 3x3 filters, known for simplicity." },
  { name: "GoogLeNet/Inception", description: "Inception modules for efficient multi-scale processing." },
  { name: "ResNet", description: "Deep residual networks with skip connections." },
  { name: "ZF-Net", description: "Visualization of intermediate features in CNNs." },
  { name: "LeNet-5", description: "Early CNN for handwritten digit recognition." },
  { name: "U-Net", description: "Encoder-decoder architecture for biomedical segmentation." },
  { name: "Faster R-CNN", description: "Region-based CNN for real-time object detection." },
];

const dlResources = [
  { title: "Deep Learning CS7015 Notes", description: "Comprehensive notes from the Deep Learning course." },
  { title: "TensorFlow Code", description: "TensorFlow implementations of various models." },
  { title: "PyTorch Code", description: "PyTorch implementations and experiments." },
  { title: "Docker Commands", description: "Reference guide for Docker commands and workflows." },
];

const mammogramResearch = [
  { title: "Mammogram Experiments", description: "Experiments with mammogram image analysis using deep learning." },
  { title: "Data Augmentation", description: "Techniques for augmenting medical imaging datasets." },
];

export default function Learning() {
  return (
    <div>
      <Container>
        <SpaceBetween direction="vertical" size="xl">
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <Box variant="h1" tagOverride="h1">Learning</Box>
            <Box variant="awsui-context-info-header" color="text-body-secondary">
              Deep learning research, neural network architectures, and studies.
            </Box>
          </div>

          <Container
            header={
              <Header
                variant="h2"
                description="Exploration of various neural network architectures"
              >
                Neural Network Architectures
              </Header>
            }
          >
            <Grid columns={2} disableResponsive={false} gutts={{ horizontal: "m", vertical: "m" }}>
              {nnArchitectures.map((nn) => (
                <Container key={nn.name}>
                  <SpaceBetween direction="vertical" size="xs">
                    <Box variant="h3" tagOverride="h3">{nn.name}</Box>
                    <Box variant="p">{nn.description}</Box>
                  </SpaceBetween>
                </Container>
              ))}
            </Grid>
          </Container>

          <Container
            header={
              <Header
                variant="h2"
                description="Mammogram image analysis research"
              >
                Mammogram Research
              </Header>
            }
          >
            <Grid columns={2} disableResponsive={false} gutts={{ horizontal: "m", vertical: "m" }}>
              {mammogramResearch.map((item) => (
                <Container key={item.title}>
                  <SpaceBetween direction="vertical" size="xs">
                    <Box variant="h3" tagOverride="h3">{item.title}</Box>
                    <Box variant="p">{item.description}</Box>
                  </SpaceBetween>
                </Container>
              ))}
            </Grid>
          </Container>

          <Container
            header={
              <Header
                variant="h2"
                description="Course notes and code implementations"
              >
                Deep Learning Resources
              </Header>
            }
          >
            <Grid columns={2} disableResponsive={false} gutts={{ horizontal: "m", vertical: "m" }}>
              {dlResources.map((item) => (
                <Container key={item.title}>
                  <SpaceBetween direction="vertical" size="xs">
                    <Box variant="h3" tagOverride="h3">{item.title}</Box>
                    <Box variant="p">{item.description}</Box>
                  </SpaceBetween>
                </Container>
              ))}
            </Grid>
          </Container>

          <Container header={<Header variant="h2">Skills Acquired</Header>}>
            <SpaceBetween direction="horizontal" size="s" wrapItems>
              {["TensorFlow", "PyTorch", "Keras", "CUDA", "Deep Learning", "Computer Vision",
                "Medical Imaging", "Transfer Learning", "Data Augmentation", "Model Optimization"
              ].map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </SpaceBetween>
          </Container>

          <Container>
            <Box variant="awsui-context-info-header" color="text-body-secondary" fontSize="heading-s" fontStyle="italic" textAlign="center">
              "The more you learn, the more you can learn."
            </Box>
          </Container>
        </SpaceBetween>
      </Container>
    </div>
  );
}
