import Link from 'next/link';
import Image from 'next/image';
import Dr from '@/assets/images/team/dr_naveenaa.png';

const founder = {
  slug: 'dr-naveena-karthik',
  image: Dr,
  name: 'Dr. Naveena Karthik',
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
                  Founder & Director
                </p>
                <p className="text-lg text-gray-700 font-medium">
                  {founder.profession}
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6 py-3 bg-pink-50 rounded-r-lg">
                <p className="text-gray-700 text-lg italic">
                  &ldquo;{founder.quote}&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            </div>

            {/* Image Column - Right Side - Perfect Circle */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Outer Glow - Large */}
                <div className="absolute -inset-6 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-all duration-500"></div>
                
                {/* Middle Glow - Medium */}
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-500"></div>
                
                {/* Inner Glow - Small */}
                <div className="absolute -inset-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

                {/* Image Container - Perfect Circle */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-pink-50 to-blue-50">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl border-2 border-pink-500 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-2xl font-bold text-pink-600">15+</div>
                  <div className="text-xs font-semibold text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
