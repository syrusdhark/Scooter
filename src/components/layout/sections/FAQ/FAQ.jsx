import { FaqCards, Container, SectionInView } from '../../../ExportComponents';
import { StyledFAQSection } from '../../../styles/FAQ.styled';
import { v4 as uuidv4 } from 'uuid';

const FAQ = () => {
  const instructions = [
    {
      question: 'How do I download the app?',
      answer:
        'To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.',
      isExpanded: true,
      class: 'show',
      id: uuidv4(),
      active: true,
    },
    {
      question: 'Can I find a nearby Scoots?',
      answer:
        "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information.",
      isExpanded: false,
      class: '',
      id: uuidv4(),
      active: false,
    },
    {
      question: 'Do I need a license to ride?',
      answer:
        'Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.',
      isExpanded: false,
      class: '',
      id: uuidv4(),
      active: false,
    },
  ];

  const safety = [
    {
      question: 'Should I wear a helmet?',
      answer:
        'Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.',
      isExpanded: true,
      class: 'show',
      id: uuidv4(),
      active: true,
    },
    {
      question: 'How about the rules & regulations?',
      answer:
        " Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
      isExpanded: false,
      class: '',
      id: uuidv4(),
      active: false,
    },
    {
      question: 'What if I damage my Scoot?',
      answer:
        "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
      isExpanded: false,
      class: '',
      id: uuidv4(),
      active: false,
    },
  ];

  return (
    <Container>
      <SectionInView StyledSection={StyledFAQSection} className="section-faq">
        <h3 className="section-title">FAQs</h3>
        <FaqCards data={instructions} title="How it works" />
        <FaqCards data={safety} title="Safe driving" />
      </SectionInView>
    </Container>
  );
};

export default FAQ;
