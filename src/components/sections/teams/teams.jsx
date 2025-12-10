import Link from 'next/link';
import Image from 'next/image';
import Dr from '@/assets/images/team/Dr naveena.jpg';

const founder = {
  slug: 'dr-naveena-karthik',
  image: Dr,
  name: 'Dr. Naveena Karthik',
  // title: 'Our Founder',
  profession: 'Developmental & Behavioural Paediatrician',
  quote: 'Every child is unique and deserves personalized care to reach their full potential.',
};

const Teams = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#eff6ff' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-600 mb-4">
            Meet Dr. Naveena
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about helping children and teens flourish, nurturing their strengths, and supporting families through every stage of development.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column - Left Side */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  {founder.name}
                </h3>
                <p className="text-xl font-semibold text-green-600 mb-2">
                  {founder.title}
                </p>
                <p className="text-lg text-gray-700 font-medium">
                  {founder.profession}
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6 py-3 bg-pink-50">
                <p className="text-gray-700 text-lg italic">
                  &ldquo;{founder.quote}&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-gray-600">
                <p>
                  With years of dedicated experience in developmental and behavioural pediatrics,
                  Dr. Naveena Karthik has been at the forefront of providing comprehensive care
                  for children with developmental challenges.
                </p>
                <p>
                  Her approach combines evidence-based medical practices with compassionate,
                  individualized care that recognizes the unique needs of each child and family.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href={`/doctors/${founder.slug}`}
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Image Column - Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
