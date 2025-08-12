import React from 'react';
import Image from 'next/image';

export default function Rulebook() {
  return (
    <div className='min-h-screen bg-stone-900 text-stone-200 pt-46'>
      <div className='max-w-6xl mx-auto p-8'>
        {/* Hero Section */}
        <div className='text-center mb-16 relative'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4 text-amber-400 tracking-wide'>
            Of Creatures and Realms
          </h1>
          <div className='w-32 h-1 bg-amber-400 mx-auto mb-4'></div>
          <p className='text-lg md:text-xl text-stone-400 font-light'>
            Official Rulebook – Version 1.0
          </p>
        </div>

        {/* Overview with decorative element */}
        <section className='mb-20 relative'>
          <div className='bg-stone-800 rounded-2xl p-6 md:p-10 border border-stone-700 shadow-2xl relative overflow-hidden'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 text-amber-400'>
              Overview
            </h2>
            <p className='text-lg md:text-xl leading-relaxed text-stone-300'>
              Of Creatures and Realms is a tactical and narrative card game for
              2 players. Each player takes the role of a Realm&apos;s summoner,
              commanding mystical creatures, powerful objects, and ancient
              affinities.{' '}
              <span className='text-amber-400 font-medium'>
                The goal? Crumble your opponent&apos;s Realm before they crumble
                yours.
              </span>
            </p>
          </div>
          <div className='absolute -top-24 -right-10 w-80 hidden lg:block'>
            <Image
              src='/images/placeholder-dragon-icon.png'
              alt='Dragon'
              width={320}
              height={320}
              className='w-full h-full object-contain'
            />
          </div>
        </section>

        {/* Game Components */}
        <section className='mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold mb-10 text-amber-400 text-center'>
            Game Components
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-stone-800 rounded-xl p-8 border border-stone-700 hover:border-amber-400 transition-all duration-300 relative'>
              <div className='absolute -top-8 right-4 w-24 h-24 hidden md:block'>
                <Image
                  src='/images/placeholder-castle-icon.png'
                  alt='Realm'
                  width={96}
                  height={96}
                  className='w-full h-full object-contain'
                />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-amber-400 mb-4'>
                Realm Deck
              </h3>
              <p className='text-stone-300 text-base md:text-lg'>
                Contains Realm cards - your mystical kingdoms and domains of
                power.
              </p>
            </div>
            <div className='bg-stone-800 rounded-xl p-8 border border-stone-700 hover:border-amber-400 transition-all duration-300 relative'>
              <div className='absolute -top-8 right-4 w-26 h-26 hidden md:block'>
                <Image
                  src='/images/placeholder-miscastling.png'
                  alt='Servants'
                  width={104}
                  height={104}
                  className='w-full h-full object-contain'
                />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-amber-400 mb-4'>
                Servants Deck
              </h3>
              <p className='text-stone-300 text-base md:text-lg'>
                Contains Realm Servant cards - your loyal advisors and mana
                sources.
              </p>
            </div>
            <div className='bg-stone-800 rounded-xl p-8 border border-stone-700 hover:border-amber-400 transition-all duration-300 relative'>
              <div className='absolute -top-8 right-4 w-24 h-24 hidden md:block'>
                <Image
                  src='/images/placeholder-sword.png'
                  alt='General'
                  width={96}
                  height={96}
                  className='w-full h-full object-contain'
                />
              </div>
              <h3 className='text-xl md:text-2xl font-bold text-amber-400 mb-4'>
                General Deck
              </h3>
              <p className='text-stone-300 text-base md:text-lg'>
                Contains Creature and Object cards - your arsenal of warriors
                and artifacts.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Section */}
        <section className='mb-20'>
          <div className='relative'>
            <div className='absolute -left-44 top-23 w-46 h-46 hidden xl:block'>
              <Image
                src='/images/placeholder-goblin.png'
                alt='Goblin Helper'
                width={184}
                height={184}
                className='w-full h-full object-contain'
              />
            </div>
            <h2 className='text-3xl md:text-4xl font-bold mb-10 text-amber-400'>
              Game Setup
            </h2>
          </div>

          <div className='space-y-8'>
            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border-l-4 border-amber-400'>
              <div className='flex items-start gap-6'>
                <div className='bg-amber-400 text-stone-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0'>
                  1
                </div>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                    Draw Realm & Servant
                  </h3>
                  <ul className='space-y-2 text-stone-300 text-base md:text-lg'>
                    <li>
                      • Shuffle your Realm deck and draw 3 cards. Choose 1 to
                      play with.
                    </li>
                    <li>
                      • Shuffle your Servants deck and draw 3 cards. Choose 1 to
                      accompany your Realm.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border-l-4 border-amber-400'>
              <div className='flex items-start gap-6'>
                <div className='bg-amber-400 text-stone-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0'>
                  2
                </div>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                    Draw Starting Hand
                  </h3>
                  <p className='text-stone-300 text-base md:text-lg'>
                    Shuffle your General Deck and draw 4 cards (Creatures and
                    Objects).
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border-l-4 border-amber-400 relative'>
              <div className='absolute top-14 -right-12 w-38 h-38 hidden lg:block'>
                <Image
                  src='/images/dice.png'
                  alt='Dice'
                  width={152}
                  height={152}
                  className='w-full h-full object-contain'
                />
              </div>
              <div className='flex items-start gap-6'>
                <div className='bg-amber-400 text-stone-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0'>
                  3
                </div>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                    Set Realm Life Points
                  </h3>
                  <ul className='space-y-2 text-stone-300 text-base md:text-lg'>
                    <li>• Each Realm card has a base HP (top-left corner).</li>
                    <li>
                      • Roll 1d6 and add the result to the base HP. This is your
                      Realm&apos;s total life.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border-l-4 border-amber-400 relative'>
              <div className='absolute -left-38 -top-8 w-22 h-22 hidden xl:block z-10'>
                <Image
                  src='/images/placeholder-dagger.png'
                  alt='Dagger'
                  width={128}
                  height={128}
                  className='w-full h-full object-contain'
                />
              </div>
              <div className='flex items-start gap-6'>
                <div className='bg-amber-400 text-stone-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0'>
                  4
                </div>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                    Who Starts?
                  </h3>
                  <ul className='space-y-2 text-stone-300 text-base md:text-lg'>
                    <li>
                      • The player whose Realm has the lowest total HP begins.
                    </li>
                    <li>
                      • If both Realms have the same HP, roll a die. The highest
                      result goes first.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Turn Structure */}
        <section className='mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold mb-10 text-amber-400 text-center'>
            Turn Structure
          </h2>
          <p className='text-lg md:text-xl text-center mb-12 text-stone-400'>
            Each turn consists of two phases
          </p>

          <div className='grid lg:grid-cols-2 gap-12'>
            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border border-stone-700 relative'>
              <div className='absolute -bottom-12 -right-2 w-36 h-36 hidden lg:block'>
                <Image
                  src='/images/placeholder-hourglass.png'
                  alt='Preparation'
                  width={144}
                  height={144}
                  className='w-full h-full object-contain'
                />
              </div>
              <h3 className='text-2xl md:text-3xl font-bold mb-6 text-amber-400'>
                1. Preparation Phase
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-stone-200'>Gain Mana</p>
                    <p className='text-stone-400 text-sm md:text-base'>
                      Add mana to your pool based on your Servants card and
                      active modifiers. Default on Turn 1: 3 mana.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-stone-200'>Draw a Card</p>
                    <p className='text-stone-400 text-sm md:text-base'>
                      Unless you already hold 6 cards. If you have 6, you may
                      discard one to draw.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-stone-200'>
                      Optional Extra Draw
                    </p>
                    <p className='text-stone-400 text-sm md:text-base'>
                      Pay 4 mana to draw an extra card (only if you&apos;ve
                      already drawn and need a creature).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border border-stone-700 relative'>
              <div className='absolute -bottom-12 -right-16 w-38 h-38 hidden lg:block'>
                <Image
                  src='/images/placeholder-battle.png'
                  alt='Combat'
                  width={152}
                  height={152}
                  className='w-full h-full object-contain'
                />
              </div>
              <h3 className='text-2xl md:text-3xl font-bold mb-6 text-amber-400'>
                2. Combat Phase
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-stone-200'>
                      Summon a Creature
                    </p>
                    <p className='text-stone-400 text-sm md:text-base'>
                      Pay its mana cost. Only one creature can be active on the
                      field.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-stone-200'>
                      Swap Active Creature
                    </p>
                    <p className='text-stone-400 text-sm md:text-base'>
                      You may replace your active creature. You cannot attack
                      that turn. Any equipped Object is discarded.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-stone-200'>
                      Attach/Swap Object
                    </p>
                    <p className='text-stone-400 text-sm md:text-base'>
                      Attach or swap an Object to your active creature. Previous
                      object is discarded if swapped.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <p className='font-semibold text-stone-200'>Attack</p>
                    <p className='text-stone-400 text-sm md:text-base'>
                      Attack opponent&apos;s creature or Realm directly if they
                      have no active creature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Types */}
        <section className='mt-35 mb-20 relative'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-amber-400 text-center'>
            Card Types
          </h2>
          <div className='mt-18 grid md:grid-cols-2 gap-8'>
            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border border-stone-700'>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                Realm Card
              </h3>
              <div className='absolute left-50 top-6 w-38 h-38 hidden xl:block'>
                <Image
                  src='/images/placeholder-card.png'
                  alt='Cards'
                  width={152}
                  height={152}
                  className='w-full h-full object-contain'
                />
              </div>
              <p className='text-stone-300 text-base md:text-lg'>
                Your kingdom. If its HP reaches 0, you lose the game.
              </p>
            </div>
            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border border-stone-700'>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                Servants of the Realm
              </h3>
              <p className='text-stone-300 text-base md:text-lg'>
                Grants mana each turn and may trigger special effects.
              </p>
            </div>
            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border border-stone-700'>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                Creature Cards
              </h3>
              <p className='text-stone-300 text-base md:text-lg'>
                Your frontline attackers. When defeated, they deal damage to
                your Realm (value printed on the card).
              </p>
            </div>
            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border border-stone-700 relative'>
              <div className='absolute bottom-0 -right-10 w-24 h-24 hidden lg:block'>
                <Image
                  src='/images/placeholder-bonebellie.png'
                  alt='Curious Goblin'
                  width={96}
                  height={96}
                  className='w-full h-full object-contain'
                />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                Object Cards
              </h3>
              <p className='text-stone-300 text-base md:text-lg'>
                Can be creature-bound (equipped) or global (affect the board
                independently). May be permanent, temporary, or passive. Can
                only be played during your turn.
              </p>
            </div>
          </div>
        </section>

        {/* Affinities */}
        <section className='mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold mb-10 text-amber-400 text-center'>
            Elemental Affinities
          </h2>
          <p className='text-lg md:text-xl text-center mb-12 text-stone-400'>
            Four elemental forces, each with strengths and weaknesses
          </p>

          <div className='bg-stone-800 rounded-2xl p-6 md:p-10 border border-stone-700 shadow-2xl relative overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm md:text-lg'>
                <thead>
                  <tr className='border-b-2 border-amber-400'>
                    <th className='text-left py-4 text-amber-400 text-base md:text-xl'>
                      Affinity
                    </th>
                    <th className='text-left py-4 text-amber-400 text-base md:text-xl'>
                      Icon
                    </th>
                    <th className='text-left py-4 text-amber-400 text-base md:text-xl'>
                      Strong Against
                    </th>
                    <th className='text-left py-4 text-amber-400 text-base md:text-xl'>
                      Weak Against
                    </th>
                  </tr>
                </thead>
                <tbody className='text-stone-300'>
                  <tr className='border-b border-stone-600 hover:bg-stone-700 transition-colors'>
                    <td className='py-4 font-semibold'>Arcane</td>
                    <td className='py-4'>
                      <Image
                        src='/images/arcane.png'
                        alt='arcane icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                    <td className='py-4'>
                      <Image
                        src='/images/bestial.png'
                        alt='Bestial icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                    <td className='py-4'>
                      <Image
                        src='/images/umbral.png'
                        alt='Umbral icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                  </tr>
                  <tr className='border-b border-stone-600 hover:bg-stone-700 transition-colors'>
                    <td className='py-4 font-semibold'>Bestial</td>
                    <td className='py-4'>
                      <Image
                        src='/images/bestial.png'
                        alt='Bestial icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                    <td className='py-4'>
                      <Image
                        src='/images/verdant.png'
                        alt='Verdant icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                    <td className='py-4'>
                      <Image
                        src='/images/arcane.png'
                        alt='arcane icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                  </tr>
                  <tr className='border-b border-stone-600 hover:bg-stone-700 transition-colors'>
                    <td className='py-4 font-semibold'>Verdant</td>
                    <td className='py-4'>
                      <Image
                        src='/images/verdant.png'
                        alt='Verdant icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                    <td className='py-4'>
                      <Image
                        src='/images/umbral.png'
                        alt='Umbral icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                    <td className='py-4'>
                      <Image
                        src='/images/bestial.png'
                        alt='Bestial icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                  </tr>
                  <tr className='hover:bg-stone-700 transition-colors'>
                    <td className='py-4 font-semibold'>Umbral</td>
                    <td className='py-4'>
                      <Image
                        src='/images/umbral.png'
                        alt='Umbral icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                    <td className='py-4'>
                      <Image
                        src='/images/arcane.png'
                        alt='arcane icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                    <td className='py-4'>
                      <Image
                        src='/images/verdant.png'
                        alt='Verdant icon'
                        width={48}
                        height={60}
                        className='w-8 h-10 md:w-12 md:h-15'
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='mt-8 bg-amber-900 bg-opacity-30 rounded-lg p-6 border border-amber-400'>
              <p className='text-amber-200 text-base md:text-lg'>
                <span className='font-bold'>Affinity Bonus:</span> When
                attacking a creature weak to your affinity, the defending player
                rolls the die specified on their card. The result is added to
                the total damage received.
              </p>
            </div>
          </div>
        </section>

        {/* Mana System */}
        <section className='mb-20'>
          <div className='relative'>
            <div className='absolute -right-8 top-0 w-32 h-32 hidden lg:block'>
              <Image
                src='/images/placeholder-mana.png'
                alt='Mana Crystal'
                width={128}
                height={128}
                className='w-full h-full object-contain'
              />
            </div>
            <h2 className='text-3xl md:text-4xl font-bold mb-10 text-amber-400'>
              Mana System
            </h2>
          </div>

          <div className='bg-stone-800 rounded-2xl p-6 md:p-10 border border-stone-700'>
            <div className='grid lg:grid-cols-3 gap-8 mb-8'>
              <div>
                <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                  Sources
                </h3>
                <ul className='space-y-2 text-stone-300 text-base md:text-lg'>
                  <li>• Servants card</li>
                  <li>• Modifiers & Objects</li>
                  <li>• Realm card abilities</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                  Properties
                </h3>
                <ul className='space-y-2 text-stone-300 text-base md:text-lg'>
                  <li>• No limit per turn</li>
                  <li>• Accumulates over time</li>
                  <li>• Persistent between turns</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl md:text-2xl font-bold mb-4 text-amber-400'>
                  Uses
                </h3>
                <ul className='space-y-2 text-stone-300 text-base md:text-lg'>
                  <li>• Summoning creatures</li>
                  <li>• Playing objects</li>
                  <li>• Extra card draw (4 mana)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Combat & Dice */}
        <section className='mb-20'>
          <div className='grid lg:grid-cols-2 gap-12'>
            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border border-stone-700 relative'>
              <div className='absolute -top-6 right-4 w-26 h-26 hidden lg:block'>
                <Image
                  src='/images/placeholder-combat-swords.png'
                  alt='Combat'
                  width={104}
                  height={104}
                  className='w-full h-full object-contain'
                />
              </div>
              <h2 className='text-2xl md:text-3xl font-bold mb-6 text-amber-400'>
                Combat & Damage
              </h2>
              <ul className='space-y-4 text-stone-300 text-base md:text-lg'>
                <li>• Creatures attack once per turn unless modified</li>
                <li>• Damage is applied to enemy creatures first</li>
                <li>
                  • When defeated, creature&apos;s &quot;Realm Damage&quot;
                  value is dealt to enemy Realm
                </li>
                <li>• With no defending creature, attack the Realm directly</li>
              </ul>
            </div>

            <div className='bg-stone-800 rounded-xl p-6 md:p-8 border border-stone-700 relative'>
              <div className='absolute bottom-0 -right-18 w-42 h-42 hidden lg:block'>
                <Image
                  src='/images/placeholder-goblin-dice.png'
                  alt='Goblin with Dice'
                  width={168}
                  height={168}
                  className='w-full h-full object-contain'
                />
              </div>
              <h2 className='text-2xl md:text-3xl font-bold mb-6 text-amber-400'>
                Dice Mechanics
              </h2>
              <ul className='space-y-4 text-stone-300 text-base md:text-lg'>
                <li>• Uses standard RPG dice: d4 through d20</li>
                <li>• Cards specify which die to roll</li>
                <li>• Triggered by affinity bonuses and object abilities</li>
                <li>• Results modify damage or activate effects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Winning Condition */}
        <section className='mb-20'>
          <div className='bg-gradient-to-r from-amber-900 to-stone-800 rounded-2xl p-8 md:p-12 border-2 border-amber-400 relative shadow-2xl'>
            <div className='absolute -top-16 -left-10 w-36 h-36 hidden lg:block'>
              <Image
                src='/images/placeholder-crown.png'
                alt='Victory Crown'
                width={144}
                height={144}
                className='w-full h-full object-contain'
              />
            </div>
            <div className='absolute -bottom-15 -right-10 w-40 h-40 hidden lg:block'>
              <Image
                src='/images/placeholder-bones.png'
                alt='Celebrating Goblin'
                width={160}
                height={160}
                className='w-full h-full object-contain'
              />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-amber-400 text-center'>
              Victory Conditions
            </h2>
            <div className='text-center'>
              <p className='text-xl md:text-2xl mb-8 text-stone-200'>
                A player wins when either:
              </p>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='bg-stone-800 bg-opacity-60 rounded-lg p-6 border border-amber-400'>
                  <h3 className='text-lg md:text-xl font-bold text-amber-400 mb-2'>
                    Realm Destruction
                  </h3>
                  <p className='text-stone-300 text-base md:text-lg'>
                    The enemy Realm&apos;s HP reaches 0
                  </p>
                </div>
                <div className='bg-stone-800 bg-opacity-60 rounded-lg p-6 border border-amber-400'>
                  <h3 className='text-lg md:text-xl font-bold text-amber-400 mb-2'>
                    Resource Exhaustion
                  </h3>
                  <p className='text-stone-300 text-base md:text-lg'>
                    Opponent runs out of cards and cannot draw or play a
                    creature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
