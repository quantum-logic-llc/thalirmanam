import Link from 'next/link';
import Image from 'next/image';
import Dr from '@/assets/images/team/drnaveena.png';

const founder = {
  slug: 'dr-naveena-karthik',
  image: Dr,
  name: 'Dr. Naveena K',
  profession: 'Developmental and Behavioural Pediatrics',
  quote: 'Every child is unique and deserves personalized care to reach their full potential.',
};

const Teams = () => {
  return (
    <section className="py-20 pt-5 bg-light-blue" >
      <div className="container mx-auto py-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-pink-600 ">
            Meet Dr. Naveena K
          </h2>
          {/* <div className="w-20 h-1 bg-pink-500 mx-auto mb-4"></div> */}
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
                   Director
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
                  Dr. Naveena K has been at the forefront of providing comprehensive care
                  for children with developmental challenges.
                </p>
                <p>
                  Her approach combines evidence-based medical practices with compassionate,
                  individualized care that recognizes the unique needs of each child and family.
                </p>
              </div>
            </div>

          
{/* Image Column - Right Side - Rounded Square */}
<div className="flex justify-center lg:justify-end">
  <div className="relative group">
    {/* Gradient Border Animation */}
    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl opacity-75 group-hover:opacity-100 blur transition-all duration-500 animate-pulse"></div>
    
    {/* Inner Shadow */}
    <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-200 to-blue-200 rounded-3xl opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500"></div>

    {/* Image Container */}
    <div className=" relative
  w-72 h-80                 
  rounded-2xl overflow-hidden
  border-4 border-white
  shadow-2xl
  transition-all duration-500
  bg-white">
      <Image
        src={founder.image}
        alt={founder.name}
        fill
        className=""
        priority
      />
    </div>

    {/* Corner Badge */}
    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full p-2 shadow-lg text-center">

                <div className="text-xs font-bold">Pediatrics</div>

    </div>
      {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl border-2 border-pink-500 text-center  ">

                  <div className="text-2xl font-bold text-pink-600">5+</div>
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
