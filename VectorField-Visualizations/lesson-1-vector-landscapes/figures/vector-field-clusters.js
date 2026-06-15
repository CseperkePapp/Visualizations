/*
  vector-field-clusters.js  —  semantic layout for the "vector landscape" 3D viz
  --------------------------------------------------------------------------
  WHAT THIS IS
  A hand-designed semantic field for the two surreal-guilt stories.
  Position = MEANING (related concepts sit close together).
  A story = a PATH: an ordered trajectory that visits points in this static field.

  HONEST CAVEAT
  These coordinates are authored to reflect real semantic relationships, but they
  are NOT extracted from a model's actual embeddings. Treat as an illustrative
  projection. (Swap in real embedding coords later if desired.)

  HOW TO READ DISTANCE
  - Short hop between consecutive path points  -> predictable, expected next word.
  - Long jump across the field                  -> a creative / surreal leap.
    (Surrealism = the path repeatedly making long jumps between distant clusters.)
  - Points that BOTH stories visit (shared:true) -> deep basins of the terrain:
    the invariants that survive a re-roll. Here: guilt, feed, self.

  COORD SYSTEM: rough cube, x,y,z in about [-10, 10]. Scale to taste in the scene.
  Member offset `o` is added to its cluster `center`.
*/

const CLUSTERS = [
  { id:'GUILT',     label:'guilt / moral',   color:'#F2A33C', center:[-6, 4, 1], deep:true,
    members:[['guilt',[0,0,0]],['lie',[1.0,0.2,-0.5]],['shame',[-1,0.5,0.4]],['regret',[0.8,-0.6,0.3]],['remorse',[0.3,1,-0.5]],['sorry',[-0.7,-0.8,0.6]]] },

  { id:'SELF',      label:'self / identity', color:'#9B8BF0', center:[-3, 6, -4], deep:true,
    members:[['self',[0,0,0]],['hands',[1,-0.4,0.3]],['mirror',[-0.8,0.6,0.5]],['mask',[0.4,1,-0.4]],['other',[-1,-0.7,-0.3]],['body',[0.6,0.3,0.9]]] },

  { id:'FEED',      label:'feed / consume',  color:'#28BBA6', center:[1, -1, 0], deep:true,
    members:[['feed',[0,0,0]],['eat',[0.8,0.4,0.2]],['hunger',[-0.7,0.6,0.3]],['devour',[0.3,-0.8,0.5]],['fed',[-0.4,-0.5,-0.4]],['bread',[1.4,0.8,0.6]]] },

  { id:'DOMESTIC',  label:'home / mundane',  color:'#E85AA6', center:[5, 1, 3],
    members:[['socks',[0,0,0]],['bed',[0.9,0.4,0.3]],['table',[-0.7,0.6,0.4]],['house',[0.4,-0.8,0.5]],['wife',[-1,-0.5,-0.3]],['kitchen',[0.7,0.9,-0.4]]] },

  { id:'BUREAU',    label:'bureaucracy',     color:'#9a9a9a', center:[8, 3, -2],
    members:[['tax form',[0,0,0]],['ledger',[0.8,0.4,0.3]],['letter',[-0.7,0.5,0.4]],['paperwork',[0.4,-0.7,0.5]],['patience',[-0.9,-0.6,-0.3]]] },

  { id:'TIME',      label:'time / abstract', color:'#3E8EE0', center:[0, 8, 5],
    members:[['year',[0,0,0]],['morning',[0.9,0.3,0.3]],['day',[-0.6,0.6,0.4]],['clock',[0.4,-0.7,0.5]],['calendar',[-0.9,-0.5,-0.3]],['decade',[0.6,0.9,-0.4]]] },

  { id:'CREATURE',  label:'creature / escape', color:'#E0728F', center:[-4, -5, 5],
    members:[['moth',[0,0,0]],['bird',[0.9,0.4,0.3]],['dust',[-0.7,0.6,0.4]],['wing',[0.4,-0.7,0.5]]] },

  { id:'THRESHOLD', label:'portal / threshold', color:'#54C078', center:[-7, -2, -6],
    members:[['door',[0,0,0]],['window',[0.9,0.4,0.3]],['wall',[-0.7,0.6,0.4]],['crack',[0.4,-0.7,0.5]],['threshold',[-0.9,-0.5,-0.3]],['far side',[0.6,0.9,-0.4]],['open',[-0.4,0.3,0.8]]] }
];

// Semantic adjacencies between clusters. affinity 0..1 (higher = closer/stronger link).
// Use to draw faint connecting filaments and/or to validate that path jumps cross weak links.
const EDGES = [
  { a:'GUILT', b:'SELF',      affinity:0.80 },
  { a:'GUILT', b:'FEED',      affinity:0.55 },
  { a:'GUILT', b:'TIME',      affinity:0.35 },
  { a:'SELF',  b:'THRESHOLD', affinity:0.50 },
  { a:'SELF',  b:'CREATURE',  affinity:0.40 },
  { a:'SELF',  b:'FEED',      affinity:0.40 },
  { a:'FEED',  b:'DOMESTIC',  affinity:0.70 },
  { a:'DOMESTIC', b:'BUREAU', affinity:0.60 },
  { a:'DOMESTIC', b:'TIME',   affinity:0.35 },
  { a:'THRESHOLD', b:'CREATURE', affinity:0.55 }
];

// Each path entry: { c:clusterId, m:member, frag:'sentence piece', shared?, fork? }
// shared = a deep-basin point BOTH versions land on (same coordinate).
// fork   = a high-entropy point where a die is rolled (many ways forward).
const PATHS = {
  v1:[ // the moth story
    { c:'GUILT',    m:'guilt',    frag:'On the third day, Guilt',                       fork:true },
    { c:'DOMESTIC', m:'socks',    frag:'was sitting at the foot of the bed, folding my socks,' },
    { c:'BUREAU',   m:'tax form', frag:'patient as a tax form.' },
    { c:'FEED',     m:'feed',     frag:'It fed on',                                      shared:true },
    { c:'TIME',     m:'year',     frag:'the year,' },
    { c:'SELF',     m:'self',     frag:'wore my hands,',                                 shared:true, fork:true },
    { c:'CREATURE', m:'moth',     frag:'and slipped out as a moth' },
    { c:'THRESHOLD',m:'window',   frag:'toward your window.' }
  ],
  v2:[ // the door story
    { c:'GUILT',    m:'lie',      frag:'The lie',                                        fork:true },
    { c:'THRESHOLD',m:'door',     frag:'cracked a grey door in the wall,' },
    { c:'DOMESTIC', m:'house',    frag:'and the house ate around it.' },
    { c:'FEED',     m:'feed',     frag:'I fed it',                                        shared:true },
    { c:'FEED',     m:'bread',    frag:'bread and the truth,' },
    { c:'SELF',     m:'self',     frag:'until I woke',                                   shared:true, fork:true },
    { c:'THRESHOLD',m:'far side', frag:'on the far side —' },
    { c:'FEED',     m:'fed',      frag:'the thing now to be fed.' }
  ]
};

const META = {
  deepBasins:['feed','self'],
  reading:'distance = semantic similarity; long jumps = surreal leaps; shared points = invariants across re-rolls',
  note:'v2 loops back into the FEED cluster (feed -> bread -> fed): the story circling its own obsession.'
};

// helper: resolve a member to absolute coords
function resolve(clusterId, member){
  const cl = CLUSTERS.find(c=>c.id===clusterId);
  const m = cl.members.find(x=>x[0]===member);
  return [cl.center[0]+m[1][0], cl.center[1]+m[1][1], cl.center[2]+m[1][2]];
}
function dist(a,b){return Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]);}

const VECTOR_FIELD = { CLUSTERS, EDGES, PATHS, META, resolve, dist };

if (typeof module !== 'undefined') module.exports = VECTOR_FIELD;
if (typeof globalThis !== 'undefined') globalThis.VECTOR_FIELD = VECTOR_FIELD;
// For ES modules (Three.js + Vite), also add:  export default VECTOR_FIELD;
