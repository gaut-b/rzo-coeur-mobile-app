export interface Product {
  code: string;
  product: ProductDetail;
  status: number;
  status_verbose: string;
}

interface ProductDetail {
  _id: string;
  _keywords: string[];
  abbreviated_product_name: string;
  abbreviated_product_name_fr: string;
  abbreviated_product_name_fr_imported: string;
  added_countries_tags: any[];
  additives_n: number;
  additives_original_tags: any[];
  additives_tags: any[];
  allergens: string;
  allergens_from_ingredients: string;
  allergens_from_user: string;
  allergens_hierarchy: any[];
  allergens_lc: string;
  allergens_tags: any[];
  amino_acids_prev_tags: any[];
  amino_acids_tags: any[];
  brands: string;
  brands_imported: string;
  brands_old: string;
  brands_tags: string[];
  carbon_footprint_percent_of_known_ingredients: number;
  categories: string;
  categories_hierarchy: string[];
  categories_imported: string;
  categories_lc: string;
  categories_old: string;
  categories_properties: CategoriesProperties;
  categories_properties_tags: string[];
  categories_tags: string[];
  category_properties: CategoryProperties;
  checkers: any[];
  checkers_tags: string[];
  ciqual_food_name_tags: string[];
  cities_tags: any[];
  code: string;
  codes_tags: string[];
  compared_to_category: string;
  complete: number;
  completed_t: number;
  completeness: number;
  conservation_conditions: string;
  conservation_conditions_fr: string;
  conservation_conditions_fr_imported: string;
  correctors: any[];
  correctors_tags: string[];
  countries: string;
  countries_beforescanbot: string;
  countries_hierarchy: string[];
  countries_imported: string;
  countries_lc: string;
  countries_tags: string[];
  created_t: number;
  creator: string;
  customer_service: string;
  customer_service_fr: string;
  customer_service_fr_imported: string;
  data_quality_bugs_tags: any[];
  data_quality_errors_tags: any[];
  data_quality_info_tags: string[];
  data_quality_tags: string[];
  data_quality_warnings_tags: string[];
  data_sources: string;
  data_sources_imported: string;
  data_sources_tags: string[];
  debug_param_sorted_langs: string[];
  debug_tags: string[];
  ecoscore_data: EcoscoreData;
  ecoscore_grade: string;
  ecoscore_tags: string[];
  editors: string[];
  editors_tags: string[];
  emb_codes: string;
  emb_codes_20141016: string;
  emb_codes_orig: string;
  emb_codes_tags: any[];
  entry_dates_tags: string[];
  environment_impact_level: string;
  environment_impact_level_tags: any[];
  expiration_date: string;
  food_groups: string;
  food_groups_tags: string[];
  'fruits-vegetables-nuts_100g_estimate': number;
  generic_name: string;
  generic_name_ar: string;
  generic_name_de: string;
  generic_name_en: string;
  generic_name_fr: string;
  generic_name_fr_imported: string;
  generic_name_it: string;
  generic_name_ko: string;
  generic_name_nl: string;
  generic_name_ro: string;
  id: string;
  image_front_small_url: string;
  image_front_thumb_url: string;
  image_front_url: string;
  image_ingredients_small_url: string;
  image_ingredients_thumb_url: string;
  image_ingredients_url: string;
  image_nutrition_small_url: string;
  image_nutrition_thumb_url: string;
  image_nutrition_url: string;
  image_packaging_small_url: string;
  image_packaging_thumb_url: string;
  image_packaging_url: string;
  image_small_url: string;
  image_thumb_url: string;
  image_url: string;
  images: Images;
  informers: string[];
  informers_tags: string[];
  ingredients: Ingredient[];
  ingredients_analysis: IngredientsAnalysis;
  ingredients_analysis_tags: string[];
  ingredients_debug: string[];
  ingredients_from_or_that_may_be_from_palm_oil_n: number;
  ingredients_from_palm_oil_n: number;
  ingredients_from_palm_oil_tags: any[];
  ingredients_hierarchy: string[];
  ingredients_ids_debug: string[];
  ingredients_lc: string;
  ingredients_n: number;
  ingredients_n_tags: string[];
  ingredients_non_nutritive_sweeteners_n: number;
  ingredients_original_tags: string[];
  ingredients_percent_analysis: number;
  ingredients_sweeteners_n: number;
  ingredients_tags: string[];
  ingredients_text: string;
  ingredients_text_ar: string;
  ingredients_text_de: string;
  ingredients_text_debug: string;
  ingredients_text_en: string;
  ingredients_text_fr: string;
  ingredients_text_fr_imported: string;
  ingredients_text_it: string;
  ingredients_text_ko: string;
  ingredients_text_nl: string;
  ingredients_text_ro: string;
  ingredients_text_with_allergens: string;
  ingredients_text_with_allergens_ar: string;
  ingredients_text_with_allergens_de: string;
  ingredients_text_with_allergens_en: string;
  ingredients_text_with_allergens_fr: string;
  ingredients_text_with_allergens_it: string;
  ingredients_text_with_allergens_nl: string;
  ingredients_text_with_allergens_ro: string;
  ingredients_that_may_be_from_palm_oil_n: number;
  ingredients_that_may_be_from_palm_oil_tags: any[];
  ingredients_with_specified_percent_n: number;
  ingredients_with_specified_percent_sum: number;
  ingredients_with_unspecified_percent_n: number;
  ingredients_with_unspecified_percent_sum: number;
  ingredients_without_ciqual_codes: any[];
  ingredients_without_ciqual_codes_n: number;
  ingredients_without_ecobalyse_ids: any[];
  ingredients_without_ecobalyse_ids_n: number;
  interface_version_created: string;
  interface_version_modified: string;
  known_ingredients_n: number;
  labels: string;
  labels_hierarchy: string[];
  labels_lc: string;
  labels_old: string;
  labels_tags: string[];
  lang: string;
  lang_imported: string;
  languages: Languages;
  languages_codes: LanguagesCodes;
  languages_hierarchy: string[];
  languages_tags: string[];
  last_edit_dates_tags: string[];
  last_editor: string;
  last_image_dates_tags: string[];
  last_image_t: number;
  last_modified_by: string;
  last_modified_t: number;
  last_updated_t: number;
  lc: string;
  lc_imported: string;
  link: string;
  main_countries_tags: any[];
  manufacturing_places: string;
  manufacturing_places_tags: string[];
  max_imgid: string;
  minerals_prev_tags: any[];
  minerals_tags: any[];
  misc_tags: string[];
  no_nutrition_data: string;
  nova_group: number;
  nova_group_debug: string;
  nova_groups: string;
  nova_groups_markers: NovaGroupsMarkers;
  nova_groups_tags: string[];
  nucleotides_prev_tags: any[];
  nucleotides_tags: any[];
  nutrient_levels: NutrientLevels;
  nutrient_levels_tags: string[];
  nutriments: Nutriments;
  nutriments_estimated: NutrimentsEstimated;
  nutriscore: Nutriscore;
  nutriscore_2021_tags: string[];
  nutriscore_2023_tags: string[];
  nutriscore_data: NutriscoreData;
  nutriscore_grade: string;
  nutriscore_score: number;
  nutriscore_score_opposite: number;
  nutriscore_tags: string[];
  nutriscore_version: string;
  nutrition_data: string;
  nutrition_data_per: string;
  nutrition_data_per_imported: string;
  nutrition_data_prepared: string;
  nutrition_data_prepared_per: string;
  nutrition_data_prepared_per_imported: string;
  nutrition_grade_fr: string;
  nutrition_grades: string;
  nutrition_grades_tags: string[];
  nutrition_score_beverage: number;
  nutrition_score_debug: string;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number;
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number;
  nutrition_score_warning_nutriments_estimated: number;
  obsolete: string;
  obsolete_imported: string;
  obsolete_since_date: string;
  origin: string;
  origin_ar: string;
  origin_de: string;
  origin_en: string;
  origin_fr: string;
  origin_fr_imported: string;
  origin_it: string;
  origin_ko: string;
  origin_nl: string;
  origin_ro: string;
  origins: string;
  origins_hierarchy: string[];
  origins_lc: string;
  origins_old: string;
  origins_tags: string[];
  other_nutritional_substances_prev_tags: any[];
  other_nutritional_substances_tags: any[];
  owner: string;
  owner_fields: OwnerFields;
  owner_imported: string;
  owners_tags: string;
  packaging: string;
  packaging_hierarchy: string[];
  packaging_lc: string;
  packaging_materials_tags: string[];
  packaging_old: string;
  packaging_old_before_taxonomization: string;
  packaging_recycling_tags: string[];
  packaging_shapes_tags: string[];
  packaging_tags: string[];
  packaging_text: string;
  packaging_text_ar: string;
  packaging_text_de: string;
  packaging_text_en: string;
  packaging_text_fr: string;
  packaging_text_it: string;
  packaging_text_ko: string;
  packaging_text_nl: string;
  packaging_text_ro: string;
  packagings: Packaging3[];
  packagings_complete: number;
  packagings_materials: PackagingsMaterials;
  packagings_materials_main: string;
  packagings_n: number;
  photographers: any[];
  photographers_tags: string[];
  pnns_groups_1: string;
  pnns_groups_1_tags: string[];
  pnns_groups_2: string;
  pnns_groups_2_tags: string[];
  popularity_key: number;
  popularity_tags: string[];
  product_name: string;
  product_name_ar: string;
  product_name_de: string;
  product_name_en: string;
  product_name_fr: string;
  product_name_fr_imported: string;
  product_name_it: string;
  product_name_ko: string;
  product_name_nl: string;
  product_name_ro: string;
  product_quantity: string;
  product_quantity_unit: string;
  product_type: string;
  purchase_places: string;
  purchase_places_tags: string[];
  quantity: string;
  quantity_imported: string;
  removed_countries_tags: any[];
  rev: number;
  scans_n: number;
  schema_version: number;
  selected_images: SelectedImages;
  serving_quantity: string;
  serving_quantity_unit: string;
  serving_size: string;
  sortkey: number;
  sources: Source[];
  sources_fields: SourcesFields;
  states: string;
  states_hierarchy: string[];
  states_tags: string[];
  stores: string;
  stores_tags: string[];
  taxonomies_enhancer_tags: string[];
  teams: string;
  teams_tags: string[];
  traces: string;
  traces_from_ingredients: string;
  traces_from_user: string;
  traces_hierarchy: any[];
  traces_lc: string;
  traces_tags: any[];
  unique_scans_n: number;
  unknown_ingredients_n: number;
  unknown_nutrients_tags: any[];
  update_key: string;
  vitamins_prev_tags: any[];
  vitamins_tags: any[];
  weighers_tags: string[];
  weighters_tags: any[];
}

interface CategoriesProperties {
  'agribalyse_food_code:en': string;
  'agribalyse_proxy_food_code:en': string;
  'ciqual_food_code:en': string;
}

interface CategoryProperties {
  'ciqual_food_name:en': string;
  'ciqual_food_name:fr': string;
}

interface EcoscoreData {
  adjustments: Adjustments;
  environmental_score_not_applicable_for_category: string;
  grade: string;
  missing: Missing;
  scores: Scores;
  status: string;
}

interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients;
  packaging: Packaging;
  production_system: ProductionSystem;
  threatened_species: ThreatenedSpecies;
}

interface OriginsOfIngredients {
  aggregated_origins: AggregatedOrigin[];
  epi_score: number;
  epi_value: number;
  origins_from_categories: string[];
  origins_from_origins_field: string[];
  transportation_score: number;
  transportation_scores: TransportationScores;
  transportation_value: number;
  transportation_values: TransportationValues;
  value: number;
  values: Values;
}

interface AggregatedOrigin {
  epi_score: string;
  origin: string;
  percent: number;
  transportation_score: number;
}

interface TransportationScores {
  ad: number;
  al: number;
  at: number;
  ax: number;
  ba: number;
  be: number;
  bg: number;
  ch: number;
  cy: number;
  cz: number;
  de: number;
  dk: number;
  dz: number;
  ee: number;
  eg: number;
  es: number;
  fi: number;
  fo: number;
  fr: number;
  gg: number;
  gi: number;
  gr: number;
  hr: number;
  hu: number;
  ie: number;
  il: number;
  im: number;
  is: number;
  it: number;
  je: number;
  lb: number;
  li: number;
  lt: number;
  lu: number;
  lv: number;
  ly: number;
  ma: number;
  mc: number;
  md: number;
  me: number;
  mk: number;
  mt: number;
  nl: number;
  no: number;
  pl: number;
  ps: number;
  pt: number;
  ro: number;
  rs: number;
  se: number;
  si: number;
  sj: number;
  sk: number;
  sm: number;
  sy: number;
  tn: number;
  tr: number;
  ua: number;
  uk: number;
  us: number;
  va: number;
  world: number;
  xk: number;
}

interface TransportationValues {
  ad: number;
  al: number;
  at: number;
  ax: number;
  ba: number;
  be: number;
  bg: number;
  ch: number;
  cy: number;
  cz: number;
  de: number;
  dk: number;
  dz: number;
  ee: number;
  eg: number;
  es: number;
  fi: number;
  fo: number;
  fr: number;
  gg: number;
  gi: number;
  gr: number;
  hr: number;
  hu: number;
  ie: number;
  il: number;
  im: number;
  is: number;
  it: number;
  je: number;
  lb: number;
  li: number;
  lt: number;
  lu: number;
  lv: number;
  ly: number;
  ma: number;
  mc: number;
  md: number;
  me: number;
  mk: number;
  mt: number;
  nl: number;
  no: number;
  pl: number;
  ps: number;
  pt: number;
  ro: number;
  rs: number;
  se: number;
  si: number;
  sj: number;
  sk: number;
  sm: number;
  sy: number;
  tn: number;
  tr: number;
  ua: number;
  uk: number;
  us: number;
  va: number;
  world: number;
  xk: number;
}

interface Values {
  ad: number;
  al: number;
  at: number;
  ax: number;
  ba: number;
  be: number;
  bg: number;
  ch: number;
  cy: number;
  cz: number;
  de: number;
  dk: number;
  dz: number;
  ee: number;
  eg: number;
  es: number;
  fi: number;
  fo: number;
  fr: number;
  gg: number;
  gi: number;
  gr: number;
  hr: number;
  hu: number;
  ie: number;
  il: number;
  im: number;
  is: number;
  it: number;
  je: number;
  lb: number;
  li: number;
  lt: number;
  lu: number;
  lv: number;
  ly: number;
  ma: number;
  mc: number;
  md: number;
  me: number;
  mk: number;
  mt: number;
  nl: number;
  no: number;
  pl: number;
  ps: number;
  pt: number;
  ro: number;
  rs: number;
  se: number;
  si: number;
  sj: number;
  sk: number;
  sm: number;
  sy: number;
  tn: number;
  tr: number;
  ua: number;
  uk: number;
  us: number;
  va: number;
  world: number;
  xk: number;
}

interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number;
  packagings: Packaging2[];
  score: number;
  value: number;
  warning: string;
}

interface Packaging2 {
  environmental_score_material_score: number;
  environmental_score_shape_ratio: number;
  material: string;
  material_shape?: string;
  non_recyclable_and_non_biodegradable?: string;
  number_of_units: number;
  quantity_per_unit?: string;
  quantity_per_unit_unit?: string;
  quantity_per_unit_value?: number;
  recycling?: string;
  shape: string;
  weight_measured: number;
}

interface ProductionSystem {
  labels: any[];
  value: number;
  warning: string;
}

type ThreatenedSpecies = unknown;

interface Missing {
  labels: number;
  packagings: number;
}

type Scores = unknown;

interface Images {
  '1': N1;
  '10': N10;
  '100': N1003;
  '102': N102;
  '103': N103;
  '106': N106;
  '107': N107;
  '108': N108;
  '109': N109;
  '11': N11;
  '110': N110;
  '111': N111;
  '112': N112;
  '113': N113;
  '116': N116;
  '12': N12;
  '120': N120;
  '121': N121;
  '122': N122;
  '123': N123;
  '124': N124;
  '125': N125;
  '126': N126;
  '129': N129;
  '13': N13;
  '131': N131;
  '132': N132;
  '133': N133;
  '134': N134;
  '135': N135;
  '136': N136;
  '137': N137;
  '139': N139;
  '14': N14;
  '140': N140;
  '142': N142;
  '143': N143;
  '144': N144;
  '15': N15;
  '17': N17;
  '172': N172;
  '173': N173;
  '174': N174;
  '175': N175;
  '176': N176;
  '177': N177;
  '178': N178;
  '179': N179;
  '18': N18;
  '180': N180;
  '181': N181;
  '182': N182;
  '183': N183;
  '186': N186;
  '187': N187;
  '188': N188;
  '189': N189;
  '19': N19;
  '190': N190;
  '191': N191;
  '192': N192;
  '193': N193;
  '195': N195;
  '196': N196;
  '198': N198;
  '199': N199;
  '2': N2;
  '20': N20;
  '200': N200;
  '201': N201;
  '202': N202;
  '203': N203;
  '205': N205;
  '208': N208;
  '209': N209;
  '21': N21;
  '211': N211;
  '212': N212;
  '213': N213;
  '214': N214;
  '215': N215;
  '216': N216;
  '217': N217;
  '218': N218;
  '219': N219;
  '22': N22;
  '220': N220;
  '221': N221;
  '223': N223;
  '225': N225;
  '226': N226;
  '227': N227;
  '228': N228;
  '229': N229;
  '230': N230;
  '231': N231;
  '232': N232;
  '233': N233;
  '234': N234;
  '235': N235;
  '236': N236;
  '237': N237;
  '238': N238;
  '239': N239;
  '24': N24;
  '240': N240;
  '241': N241;
  '243': N243;
  '244': N244;
  '248': N248;
  '249': N249;
  '25': N25;
  '250': N250;
  '251': N251;
  '253': N253;
  '254': N254;
  '255': N255;
  '256': N256;
  '257': N257;
  '258': N258;
  '26': N26;
  '260': N260;
  '261': N261;
  '262': N262;
  '263': N263;
  '264': N264;
  '265': N265;
  '266': N266;
  '267': N267;
  '268': N268;
  '269': N269;
  '27': N27;
  '270': N270;
  '272': N272;
  '273': N273;
  '276': N276;
  '279': N279;
  '28': N28;
  '280': N280;
  '281': N281;
  '282': N282;
  '284': N284;
  '285': N285;
  '286': N286;
  '287': N287;
  '288': N288;
  '289': N289;
  '29': N29;
  '291': N291;
  '293': N293;
  '294': N294;
  '295': N295;
  '297': N297;
  '299': N299;
  '3': N3;
  '301': N301;
  '304': N304;
  '305': N305;
  '306': N306;
  '307': N307;
  '308': N308;
  '309': N309;
  '31': N31;
  '310': N310;
  '311': N311;
  '312': N312;
  '313': N313;
  '314': N314;
  '315': N315;
  '316': N316;
  '317': N317;
  '318': N318;
  '319': N319;
  '32': N32;
  '320': N320;
  '321': N321;
  '323': N323;
  '324': N324;
  '325': N325;
  '328': N328;
  '329': N329;
  '33': N33;
  '330': N330;
  '331': N331;
  '332': N332;
  '333': N333;
  '334': N334;
  '335': N335;
  '338': N338;
  '339': N339;
  '340': N340;
  '341': N341;
  '342': N342;
  '343': N343;
  '344': N344;
  '345': N345;
  '346': N346;
  '347': N347;
  '348': N348;
  '349': N349;
  '350': N350;
  '351': N351;
  '352': N352;
  '353': N353;
  '354': N354;
  '355': N355;
  '356': N356;
  '357': N357;
  '358': N358;
  '360': N360;
  '361': N361;
  '362': N362;
  '363': N363;
  '364': N364;
  '365': N365;
  '366': N366;
  '367': N367;
  '368': N368;
  '369': N369;
  '370': N370;
  '371': N371;
  '373': N373;
  '374': N374;
  '375': N375;
  '376': N376;
  '377': N377;
  '378': N378;
  '379': N379;
  '38': N38;
  '382': N382;
  '383': N383;
  '384': N384;
  '385': N385;
  '386': N386;
  '387': N387;
  '389': N389;
  '39': N39;
  '390': N390;
  '391': N391;
  '392': N392;
  '393': N393;
  '394': N394;
  '395': N395;
  '396': N396;
  '398': N398;
  '399': N399;
  '4': N4;
  '40': N40;
  '400': N400249;
  '401': N401;
  '402': N402;
  '404': N404;
  '406': N406;
  '407': N407;
  '408': N408;
  '409': N409;
  '410': N410;
  '411': N411;
  '412': N412;
  '43': N43;
  '44': N44;
  '47': N47;
  '48': N48;
  '5': N5;
  '50': N50;
  '52': N52;
  '54': N54;
  '55': N55;
  '56': N56;
  '57': N57;
  '59': N59;
  '6': N6;
  '60': N60;
  '61': N61;
  '62': N62;
  '63': N63;
  '64': N64;
  '65': N65;
  '66': N66;
  '69': N69;
  '7': N7;
  '70': N70;
  '71': N71;
  '72': N72;
  '73': N73;
  '74': N74;
  '76': N76;
  '77': N77;
  '78': N78;
  '79': N79;
  '8': N8;
  '80': N80;
  '81': N81;
  '82': N82;
  '83': N83;
  '84': N84;
  '85': N85;
  '88': N88;
  '89': N89;
  '9': N9;
  '90': N90;
  '91': N91;
  '92': N92;
  '93': N93;
  '94': N94;
  '95': N95;
  '97': N97;
  '98': N98;
  '99': N99;
  front_ar: FrontAr;
  front_de: FrontDe;
  front_en: FrontEn;
  front_fr: FrontFr;
  front_it: FrontIt;
  front_nl: FrontNl;
  front_ro: FrontRo;
  ingredients_en: IngredientsEn;
  ingredients_fr: IngredientsFr;
  nutrition_en: NutritionEn;
  nutrition_fr: NutritionFr;
  nutrition_it: NutritionIt;
  nutrition_nl: NutritionNl;
  nutrition_ro: NutritionRo;
  other_fr: OtherFr;
  packaging_en: PackagingEn;
  packaging_fr: PackagingFr;
  packaging_nl: PackagingNl;
}

interface N1 {
  sizes: Sizes;
  uploaded_t: number;
  uploader: string;
}

interface Sizes {
  '100': N100;
  '400': N400;
  full: Full;
}

interface N100 {
  h: number;
  w: number;
}

interface N400 {
  h: number;
  w: number;
}

interface Full {
  h: number;
  w: number;
}

interface N10 {
  sizes: Sizes2;
  uploaded_t: number;
  uploader: string;
}

interface Sizes2 {
  '100': N1002;
  '400': N4002;
  full: Full2;
}

interface N1002 {
  h: number;
  w: number;
}

interface N4002 {
  h: number;
  w: number;
}

interface Full2 {
  h: number;
  w: number;
}

interface N1003 {
  sizes: Sizes3;
  uploaded_t: string;
  uploader: string;
}

interface Sizes3 {
  '100': N1004;
  '400': N4003;
  full: Full3;
}

interface N1004 {
  h: number;
  w: number;
}

interface N4003 {
  h: number;
  w: number;
}

interface Full3 {
  h: number;
  w: number;
}

interface N102 {
  sizes: Sizes4;
  uploaded_t: string;
  uploader: string;
}

interface Sizes4 {
  '100': N1005;
  '400': N4004;
  full: Full4;
}

interface N1005 {
  h: number;
  w: number;
}

interface N4004 {
  h: number;
  w: number;
}

interface Full4 {
  h: number;
  w: number;
}

interface N103 {
  sizes: Sizes5;
  uploaded_t: string;
  uploader: string;
}

interface Sizes5 {
  '100': N1006;
  '400': N4005;
  full: Full5;
}

interface N1006 {
  h: number;
  w: number;
}

interface N4005 {
  h: number;
  w: number;
}

interface Full5 {
  h: number;
  w: number;
}

interface N106 {
  sizes: Sizes6;
  uploaded_t: string;
  uploader: string;
}

interface Sizes6 {
  '100': N1007;
  '400': N4006;
  full: Full6;
}

interface N1007 {
  h: number;
  w: number;
}

interface N4006 {
  h: number;
  w: number;
}

interface Full6 {
  h: number;
  w: number;
}

interface N107 {
  sizes: Sizes7;
  uploaded_t: string;
  uploader: string;
}

interface Sizes7 {
  '100': N1008;
  '400': N4007;
  full: Full7;
}

interface N1008 {
  h: number;
  w: number;
}

interface N4007 {
  h: number;
  w: number;
}

interface Full7 {
  h: number;
  w: number;
}

interface N108 {
  sizes: Sizes8;
  uploaded_t: string;
  uploader: string;
}

interface Sizes8 {
  '100': N1009;
  '400': N4008;
  full: Full8;
}

interface N1009 {
  h: number;
  w: number;
}

interface N4008 {
  h: number;
  w: number;
}

interface Full8 {
  h: number;
  w: number;
}

interface N109 {
  sizes: Sizes9;
  uploaded_t: string;
  uploader: string;
}

interface Sizes9 {
  '100': N10010;
  '400': N4009;
  full: Full9;
}

interface N10010 {
  h: number;
  w: number;
}

interface N4009 {
  h: number;
  w: number;
}

interface Full9 {
  h: number;
  w: number;
}

interface N11 {
  sizes: Sizes10;
  uploaded_t: number;
  uploader: string;
}

interface Sizes10 {
  '100': N10011;
  '400': N40010;
  full: Full10;
}

interface N10011 {
  h: number;
  w: number;
}

interface N40010 {
  h: number;
  w: number;
}

interface Full10 {
  h: number;
  w: number;
}

interface N110 {
  sizes: Sizes11;
  uploaded_t: string;
  uploader: string;
}

interface Sizes11 {
  '100': N10012;
  '400': N40011;
  full: Full11;
}

interface N10012 {
  h: number;
  w: number;
}

interface N40011 {
  h: number;
  w: number;
}

interface Full11 {
  h: number;
  w: number;
}

interface N111 {
  sizes: Sizes12;
  uploaded_t: string;
  uploader: string;
}

interface Sizes12 {
  '100': N10013;
  '400': N40012;
  full: Full12;
}

interface N10013 {
  h: number;
  w: number;
}

interface N40012 {
  h: number;
  w: number;
}

interface Full12 {
  h: number;
  w: number;
}

interface N112 {
  sizes: Sizes13;
  uploaded_t: string;
  uploader: string;
}

interface Sizes13 {
  '100': N10014;
  '400': N40013;
  full: Full13;
}

interface N10014 {
  h: number;
  w: number;
}

interface N40013 {
  h: number;
  w: number;
}

interface Full13 {
  h: number;
  w: number;
}

interface N113 {
  sizes: Sizes14;
  uploaded_t: string;
  uploader: string;
}

interface Sizes14 {
  '100': N10015;
  '400': N40014;
  full: Full14;
}

interface N10015 {
  h: number;
  w: number;
}

interface N40014 {
  h: number;
  w: number;
}

interface Full14 {
  h: number;
  w: number;
}

interface N116 {
  sizes: Sizes15;
  uploaded_t: string;
  uploader: string;
}

interface Sizes15 {
  '100': N10016;
  '400': N40015;
  full: Full15;
}

interface N10016 {
  h: number;
  w: number;
}

interface N40015 {
  h: number;
  w: number;
}

interface Full15 {
  h: number;
  w: number;
}

interface N12 {
  sizes: Sizes16;
  uploaded_t: number;
  uploader: string;
}

interface Sizes16 {
  '100': N10017;
  '400': N40016;
  full: Full16;
}

interface N10017 {
  h: number;
  w: number;
}

interface N40016 {
  h: number;
  w: number;
}

interface Full16 {
  h: number;
  w: number;
}

interface N120 {
  sizes: Sizes17;
  uploaded_t: string;
  uploader: string;
}

interface Sizes17 {
  '100': N10018;
  '400': N40017;
  full: Full17;
}

interface N10018 {
  h: number;
  w: number;
}

interface N40017 {
  h: number;
  w: number;
}

interface Full17 {
  h: number;
  w: number;
}

interface N121 {
  sizes: Sizes18;
  uploaded_t: string;
  uploader: string;
}

interface Sizes18 {
  '100': N10019;
  '400': N40018;
  full: Full18;
}

interface N10019 {
  h: number;
  w: number;
}

interface N40018 {
  h: number;
  w: number;
}

interface Full18 {
  h: number;
  w: number;
}

interface N122 {
  sizes: Sizes19;
  uploaded_t: string;
  uploader: string;
}

interface Sizes19 {
  '100': N10020;
  '400': N40019;
  full: Full19;
}

interface N10020 {
  h: number;
  w: number;
}

interface N40019 {
  h: number;
  w: number;
}

interface Full19 {
  h: number;
  w: number;
}

interface N123 {
  sizes: Sizes20;
  uploaded_t: string;
  uploader: string;
}

interface Sizes20 {
  '100': N10021;
  '400': N40020;
  full: Full20;
}

interface N10021 {
  h: number;
  w: number;
}

interface N40020 {
  h: number;
  w: number;
}

interface Full20 {
  h: number;
  w: number;
}

interface N124 {
  sizes: Sizes21;
  uploaded_t: string;
  uploader: string;
}

interface Sizes21 {
  '100': N10022;
  '400': N40021;
  full: Full21;
}

interface N10022 {
  h: number;
  w: number;
}

interface N40021 {
  h: number;
  w: number;
}

interface Full21 {
  h: number;
  w: number;
}

interface N125 {
  sizes: Sizes22;
  uploaded_t: string;
  uploader: string;
}

interface Sizes22 {
  '100': N10023;
  '400': N40022;
  full: Full22;
}

interface N10023 {
  h: number;
  w: number;
}

interface N40022 {
  h: number;
  w: number;
}

interface Full22 {
  h: number;
  w: number;
}

interface N126 {
  sizes: Sizes23;
  uploaded_t: string;
  uploader: string;
}

interface Sizes23 {
  '100': N10024;
  '400': N40023;
  full: Full23;
}

interface N10024 {
  h: number;
  w: number;
}

interface N40023 {
  h: number;
  w: number;
}

interface Full23 {
  h: number;
  w: number;
}

interface N129 {
  sizes: Sizes24;
  uploaded_t: string;
  uploader: string;
}

interface Sizes24 {
  '100': N10025;
  '400': N40024;
  full: Full24;
}

interface N10025 {
  h: number;
  w: number;
}

interface N40024 {
  h: number;
  w: number;
}

interface Full24 {
  h: number;
  w: number;
}

interface N13 {
  sizes: Sizes25;
  uploaded_t: number;
  uploader: string;
}

interface Sizes25 {
  '100': N10026;
  '400': N40025;
  full: Full25;
}

interface N10026 {
  h: number;
  w: number;
}

interface N40025 {
  h: number;
  w: number;
}

interface Full25 {
  h: number;
  w: number;
}

interface N131 {
  sizes: Sizes26;
  uploaded_t: string;
  uploader: string;
}

interface Sizes26 {
  '100': N10027;
  '400': N40026;
  full: Full26;
}

interface N10027 {
  h: number;
  w: number;
}

interface N40026 {
  h: number;
  w: number;
}

interface Full26 {
  h: number;
  w: number;
}

interface N132 {
  sizes: Sizes27;
  uploaded_t: string;
  uploader: string;
}

interface Sizes27 {
  '100': N10028;
  '400': N40027;
  full: Full27;
}

interface N10028 {
  h: number;
  w: number;
}

interface N40027 {
  h: number;
  w: number;
}

interface Full27 {
  h: number;
  w: number;
}

interface N133 {
  sizes: Sizes28;
  uploaded_t: string;
  uploader: string;
}

interface Sizes28 {
  '100': N10029;
  '400': N40028;
  full: Full28;
}

interface N10029 {
  h: number;
  w: number;
}

interface N40028 {
  h: number;
  w: number;
}

interface Full28 {
  h: number;
  w: number;
}

interface N134 {
  sizes: Sizes29;
  uploaded_t: string;
  uploader: string;
}

interface Sizes29 {
  '100': N10030;
  '400': N40029;
  full: Full29;
}

interface N10030 {
  h: number;
  w: number;
}

interface N40029 {
  h: number;
  w: number;
}

interface Full29 {
  h: number;
  w: number;
}

interface N135 {
  sizes: Sizes30;
  uploaded_t: string;
  uploader: string;
}

interface Sizes30 {
  '100': N10031;
  '400': N40030;
  full: Full30;
}

interface N10031 {
  h: number;
  w: number;
}

interface N40030 {
  h: number;
  w: number;
}

interface Full30 {
  h: number;
  w: number;
}

interface N136 {
  sizes: Sizes31;
  uploaded_t: string;
  uploader: string;
}

interface Sizes31 {
  '100': N10032;
  '400': N40031;
  full: Full31;
}

interface N10032 {
  h: number;
  w: number;
}

interface N40031 {
  h: number;
  w: number;
}

interface Full31 {
  h: number;
  w: number;
}

interface N137 {
  sizes: Sizes32;
  uploaded_t: string;
  uploader: string;
}

interface Sizes32 {
  '100': N10033;
  '400': N40032;
  full: Full32;
}

interface N10033 {
  h: number;
  w: number;
}

interface N40032 {
  h: number;
  w: number;
}

interface Full32 {
  h: number;
  w: number;
}

interface N139 {
  sizes: Sizes33;
  uploaded_t: number;
  uploader: string;
}

interface Sizes33 {
  '100': N10034;
  '400': N40033;
  full: Full33;
}

interface N10034 {
  h: number;
  w: number;
}

interface N40033 {
  h: number;
  w: number;
}

interface Full33 {
  h: number;
  w: number;
}

interface N14 {
  sizes: Sizes34;
  uploaded_t: number;
  uploader: string;
}

interface Sizes34 {
  '100': N10035;
  '400': N40034;
  full: Full34;
}

interface N10035 {
  h: number;
  w: number;
}

interface N40034 {
  h: number;
  w: number;
}

interface Full34 {
  h: number;
  w: number;
}

interface N140 {
  sizes: Sizes35;
  uploaded_t: number;
  uploader: string;
}

interface Sizes35 {
  '100': N10036;
  '400': N40035;
  full: Full35;
}

interface N10036 {
  h: number;
  w: number;
}

interface N40035 {
  h: number;
  w: number;
}

interface Full35 {
  h: number;
  w: number;
}

interface N142 {
  sizes: Sizes36;
  uploaded_t: number;
  uploader: string;
}

interface Sizes36 {
  '100': N10037;
  '400': N40036;
  full: Full36;
}

interface N10037 {
  h: number;
  w: number;
}

interface N40036 {
  h: number;
  w: number;
}

interface Full36 {
  h: number;
  w: number;
}

interface N143 {
  sizes: Sizes37;
  uploaded_t: number;
  uploader: string;
}

interface Sizes37 {
  '100': N10038;
  '400': N40037;
  full: Full37;
}

interface N10038 {
  h: number;
  w: number;
}

interface N40037 {
  h: number;
  w: number;
}

interface Full37 {
  h: number;
  w: number;
}

interface N144 {
  sizes: Sizes38;
  uploaded_t: number;
  uploader: string;
}

interface Sizes38 {
  '100': N10039;
  '400': N40038;
  full: Full38;
}

interface N10039 {
  h: number;
  w: number;
}

interface N40038 {
  h: number;
  w: number;
}

interface Full38 {
  h: number;
  w: number;
}

interface N15 {
  sizes: Sizes39;
  uploaded_t: number;
  uploader: string;
}

interface Sizes39 {
  '100': N10040;
  '400': N40039;
  full: Full39;
}

interface N10040 {
  h: number;
  w: number;
}

interface N40039 {
  h: number;
  w: number;
}

interface Full39 {
  h: number;
  w: number;
}

interface N17 {
  sizes: Sizes40;
  uploaded_t: string;
  uploader: string;
}

interface Sizes40 {
  '100': N10041;
  '400': N40040;
  full: Full40;
}

interface N10041 {
  h: number;
  w: number;
}

interface N40040 {
  h: number;
  w: number;
}

interface Full40 {
  h: number;
  w: number;
}

interface N172 {
  sizes: Sizes41;
  uploaded_t: number;
  uploader: string;
}

interface Sizes41 {
  '100': N10042;
  '400': N40041;
  full: Full41;
}

interface N10042 {
  h: number;
  w: number;
}

interface N40041 {
  h: number;
  w: number;
}

interface Full41 {
  h: number;
  w: number;
}

interface N173 {
  sizes: Sizes42;
  uploaded_t: number;
  uploader: string;
}

interface Sizes42 {
  '100': N10043;
  '400': N40042;
  full: Full42;
}

interface N10043 {
  h: number;
  w: number;
}

interface N40042 {
  h: number;
  w: number;
}

interface Full42 {
  h: number;
  w: number;
}

interface N174 {
  sizes: Sizes43;
  uploaded_t: number;
  uploader: string;
}

interface Sizes43 {
  '100': N10044;
  '400': N40043;
  full: Full43;
}

interface N10044 {
  h: number;
  w: number;
}

interface N40043 {
  h: number;
  w: number;
}

interface Full43 {
  h: number;
  w: number;
}

interface N175 {
  sizes: Sizes44;
  uploaded_t: number;
  uploader: string;
}

interface Sizes44 {
  '100': N10045;
  '400': N40044;
  full: Full44;
}

interface N10045 {
  h: number;
  w: number;
}

interface N40044 {
  h: number;
  w: number;
}

interface Full44 {
  h: number;
  w: number;
}

interface N176 {
  sizes: Sizes45;
  uploaded_t: number;
  uploader: string;
}

interface Sizes45 {
  '100': N10046;
  '400': N40045;
  full: Full45;
}

interface N10046 {
  h: number;
  w: number;
}

interface N40045 {
  h: number;
  w: number;
}

interface Full45 {
  h: number;
  w: number;
}

interface N177 {
  sizes: Sizes46;
  uploaded_t: number;
  uploader: string;
}

interface Sizes46 {
  '100': N10047;
  '400': N40046;
  full: Full46;
}

interface N10047 {
  h: number;
  w: number;
}

interface N40046 {
  h: number;
  w: number;
}

interface Full46 {
  h: number;
  w: number;
}

interface N178 {
  sizes: Sizes47;
  uploaded_t: number;
  uploader: string;
}

interface Sizes47 {
  '100': N10048;
  '400': N40047;
  full: Full47;
}

interface N10048 {
  h: number;
  w: number;
}

interface N40047 {
  h: number;
  w: number;
}

interface Full47 {
  h: number;
  w: number;
}

interface N179 {
  sizes: Sizes48;
  uploaded_t: number;
  uploader: string;
}

interface Sizes48 {
  '100': N10049;
  '400': N40048;
  full: Full48;
}

interface N10049 {
  h: number;
  w: number;
}

interface N40048 {
  h: number;
  w: number;
}

interface Full48 {
  h: number;
  w: number;
}

interface N18 {
  sizes: Sizes49;
  uploaded_t: string;
  uploader: string;
}

interface Sizes49 {
  '100': N10050;
  '400': N40049;
  full: Full49;
}

interface N10050 {
  h: number;
  w: number;
}

interface N40049 {
  h: number;
  w: number;
}

interface Full49 {
  h: number;
  w: number;
}

interface N180 {
  sizes: Sizes50;
  uploaded_t: number;
  uploader: string;
}

interface Sizes50 {
  '100': N10051;
  '400': N40050;
  full: Full50;
}

interface N10051 {
  h: number;
  w: number;
}

interface N40050 {
  h: number;
  w: number;
}

interface Full50 {
  h: number;
  w: number;
}

interface N181 {
  sizes: Sizes51;
  uploaded_t: number;
  uploader: string;
}

interface Sizes51 {
  '100': N10052;
  '400': N40051;
  full: Full51;
}

interface N10052 {
  h: number;
  w: number;
}

interface N40051 {
  h: number;
  w: number;
}

interface Full51 {
  h: number;
  w: number;
}

interface N182 {
  sizes: Sizes52;
  uploaded_t: number;
  uploader: string;
}

interface Sizes52 {
  '100': N10053;
  '400': N40052;
  full: Full52;
}

interface N10053 {
  h: number;
  w: number;
}

interface N40052 {
  h: number;
  w: number;
}

interface Full52 {
  h: number;
  w: number;
}

interface N183 {
  sizes: Sizes53;
  uploaded_t: number;
  uploader: string;
}

interface Sizes53 {
  '100': N10054;
  '400': N40053;
  full: Full53;
}

interface N10054 {
  h: number;
  w: number;
}

interface N40053 {
  h: number;
  w: number;
}

interface Full53 {
  h: number;
  w: number;
}

interface N186 {
  sizes: Sizes54;
  uploaded_t: number;
  uploader: string;
}

interface Sizes54 {
  '100': N10055;
  '400': N40054;
  full: Full54;
}

interface N10055 {
  h: number;
  w: number;
}

interface N40054 {
  h: number;
  w: number;
}

interface Full54 {
  h: number;
  w: number;
}

interface N187 {
  sizes: Sizes55;
  uploaded_t: number;
  uploader: string;
}

interface Sizes55 {
  '100': N10056;
  '400': N40055;
  full: Full55;
}

interface N10056 {
  h: number;
  w: number;
}

interface N40055 {
  h: number;
  w: number;
}

interface Full55 {
  h: number;
  w: number;
}

interface N188 {
  sizes: Sizes56;
  uploaded_t: number;
  uploader: string;
}

interface Sizes56 {
  '100': N10057;
  '400': N40056;
  full: Full56;
}

interface N10057 {
  h: number;
  w: number;
}

interface N40056 {
  h: number;
  w: number;
}

interface Full56 {
  h: number;
  w: number;
}

interface N189 {
  sizes: Sizes57;
  uploaded_t: number;
  uploader: string;
}

interface Sizes57 {
  '100': N10058;
  '400': N40057;
  full: Full57;
}

interface N10058 {
  h: number;
  w: number;
}

interface N40057 {
  h: number;
  w: number;
}

interface Full57 {
  h: number;
  w: number;
}

interface N19 {
  sizes: Sizes58;
  uploaded_t: string;
  uploader: string;
}

interface Sizes58 {
  '100': N10059;
  '400': N40058;
  full: Full58;
}

interface N10059 {
  h: number;
  w: number;
}

interface N40058 {
  h: number;
  w: number;
}

interface Full58 {
  h: number;
  w: number;
}

interface N190 {
  sizes: Sizes59;
  uploaded_t: number;
  uploader: string;
}

interface Sizes59 {
  '100': N10060;
  '400': N40059;
  full: Full59;
}

interface N10060 {
  h: number;
  w: number;
}

interface N40059 {
  h: number;
  w: number;
}

interface Full59 {
  h: number;
  w: number;
}

interface N191 {
  sizes: Sizes60;
  uploaded_t: number;
  uploader: string;
}

interface Sizes60 {
  '100': N10061;
  '400': N40060;
  full: Full60;
}

interface N10061 {
  h: number;
  w: number;
}

interface N40060 {
  h: number;
  w: number;
}

interface Full60 {
  h: number;
  w: number;
}

interface N192 {
  sizes: Sizes61;
  uploaded_t: number;
  uploader: string;
}

interface Sizes61 {
  '100': N10062;
  '400': N40061;
  full: Full61;
}

interface N10062 {
  h: number;
  w: number;
}

interface N40061 {
  h: number;
  w: number;
}

interface Full61 {
  h: number;
  w: number;
}

interface N193 {
  sizes: Sizes62;
  uploaded_t: number;
  uploader: string;
}

interface Sizes62 {
  '100': N10063;
  '400': N40062;
  full: Full62;
}

interface N10063 {
  h: number;
  w: number;
}

interface N40062 {
  h: number;
  w: number;
}

interface Full62 {
  h: number;
  w: number;
}

interface N195 {
  sizes: Sizes63;
  uploaded_t: number;
  uploader: string;
}

interface Sizes63 {
  '100': N10064;
  '400': N40063;
  full: Full63;
}

interface N10064 {
  h: number;
  w: number;
}

interface N40063 {
  h: number;
  w: number;
}

interface Full63 {
  h: number;
  w: number;
}

interface N196 {
  sizes: Sizes64;
  uploaded_t: number;
  uploader: string;
}

interface Sizes64 {
  '100': N10065;
  '400': N40064;
  full: Full64;
}

interface N10065 {
  h: number;
  w: number;
}

interface N40064 {
  h: number;
  w: number;
}

interface Full64 {
  h: number;
  w: number;
}

interface N198 {
  sizes: Sizes65;
  uploaded_t: number;
  uploader: string;
}

interface Sizes65 {
  '100': N10066;
  '400': N40065;
  full: Full65;
}

interface N10066 {
  h: number;
  w: number;
}

interface N40065 {
  h: number;
  w: number;
}

interface Full65 {
  h: number;
  w: number;
}

interface N199 {
  sizes: Sizes66;
  uploaded_t: number;
  uploader: string;
}

interface Sizes66 {
  '100': N10067;
  '400': N40066;
  full: Full66;
}

interface N10067 {
  h: number;
  w: number;
}

interface N40066 {
  h: number;
  w: number;
}

interface Full66 {
  h: number;
  w: number;
}

interface N2 {
  sizes: Sizes67;
  uploaded_t: number;
  uploader: string;
}

interface Sizes67 {
  '100': N10068;
  '400': N40067;
  full: Full67;
}

interface N10068 {
  h: number;
  w: number;
}

interface N40067 {
  h: number;
  w: number;
}

interface Full67 {
  h: number;
  w: number;
}

interface N20 {
  sizes: Sizes68;
  uploaded_t: string;
  uploader: string;
}

interface Sizes68 {
  '100': N10069;
  '400': N40068;
  full: Full68;
}

interface N10069 {
  h: number;
  w: number;
}

interface N40068 {
  h: number;
  w: number;
}

interface Full68 {
  h: number;
  w: number;
}

interface N200 {
  sizes: Sizes69;
  uploaded_t: number;
  uploader: string;
}

interface Sizes69 {
  '100': N10070;
  '400': N40069;
  full: Full69;
}

interface N10070 {
  h: number;
  w: number;
}

interface N40069 {
  h: number;
  w: number;
}

interface Full69 {
  h: number;
  w: number;
}

interface N201 {
  sizes: Sizes70;
  uploaded_t: number;
  uploader: string;
}

interface Sizes70 {
  '100': N10071;
  '400': N40070;
  full: Full70;
}

interface N10071 {
  h: number;
  w: number;
}

interface N40070 {
  h: number;
  w: number;
}

interface Full70 {
  h: number;
  w: number;
}

interface N202 {
  sizes: Sizes71;
  uploaded_t: number;
  uploader: string;
}

interface Sizes71 {
  '100': N10072;
  '400': N40071;
  full: Full71;
}

interface N10072 {
  h: number;
  w: number;
}

interface N40071 {
  h: number;
  w: number;
}

interface Full71 {
  h: number;
  w: number;
}

interface N203 {
  sizes: Sizes72;
  uploaded_t: number;
  uploader: string;
}

interface Sizes72 {
  '100': N10073;
  '400': N40072;
  full: Full72;
}

interface N10073 {
  h: number;
  w: number;
}

interface N40072 {
  h: number;
  w: number;
}

interface Full72 {
  h: number;
  w: number;
}

interface N205 {
  sizes: Sizes73;
  uploaded_t: number;
  uploader: string;
}

interface Sizes73 {
  '100': N10074;
  '400': N40073;
  full: Full73;
}

interface N10074 {
  h: number;
  w: number;
}

interface N40073 {
  h: number;
  w: number;
}

interface Full73 {
  h: number;
  w: number;
}

interface N208 {
  sizes: Sizes74;
  uploaded_t: number;
  uploader: string;
}

interface Sizes74 {
  '100': N10075;
  '400': N40074;
  full: Full74;
}

interface N10075 {
  h: number;
  w: number;
}

interface N40074 {
  h: number;
  w: number;
}

interface Full74 {
  h: number;
  w: number;
}

interface N209 {
  sizes: Sizes75;
  uploaded_t: number;
  uploader: string;
}

interface Sizes75 {
  '100': N10076;
  '400': N40075;
  full: Full75;
}

interface N10076 {
  h: number;
  w: number;
}

interface N40075 {
  h: number;
  w: number;
}

interface Full75 {
  h: number;
  w: number;
}

interface N21 {
  sizes: Sizes76;
  uploaded_t: string;
  uploader: string;
}

interface Sizes76 {
  '100': N10077;
  '400': N40076;
  full: Full76;
}

interface N10077 {
  h: number;
  w: number;
}

interface N40076 {
  h: number;
  w: number;
}

interface Full76 {
  h: number;
  w: number;
}

interface N211 {
  sizes: Sizes77;
  uploaded_t: number;
  uploader: string;
}

interface Sizes77 {
  '100': N10078;
  '400': N40077;
  full: Full77;
}

interface N10078 {
  h: number;
  w: number;
}

interface N40077 {
  h: number;
  w: number;
}

interface Full77 {
  h: number;
  w: number;
}

interface N212 {
  sizes: Sizes78;
  uploaded_t: number;
  uploader: string;
}

interface Sizes78 {
  '100': N10079;
  '400': N40078;
  full: Full78;
}

interface N10079 {
  h: number;
  w: number;
}

interface N40078 {
  h: number;
  w: number;
}

interface Full78 {
  h: number;
  w: number;
}

interface N213 {
  sizes: Sizes79;
  uploaded_t: number;
  uploader: string;
}

interface Sizes79 {
  '100': N10080;
  '400': N40079;
  full: Full79;
}

interface N10080 {
  h: number;
  w: number;
}

interface N40079 {
  h: number;
  w: number;
}

interface Full79 {
  h: number;
  w: number;
}

interface N214 {
  sizes: Sizes80;
  uploaded_t: number;
  uploader: string;
}

interface Sizes80 {
  '100': N10081;
  '400': N40080;
  full: Full80;
}

interface N10081 {
  h: number;
  w: number;
}

interface N40080 {
  h: number;
  w: number;
}

interface Full80 {
  h: number;
  w: number;
}

interface N215 {
  sizes: Sizes81;
  uploaded_t: number;
  uploader: string;
}

interface Sizes81 {
  '100': N10082;
  '400': N40081;
  full: Full81;
}

interface N10082 {
  h: number;
  w: number;
}

interface N40081 {
  h: number;
  w: number;
}

interface Full81 {
  h: number;
  w: number;
}

interface N216 {
  sizes: Sizes82;
  uploaded_t: number;
  uploader: string;
}

interface Sizes82 {
  '100': N10083;
  '400': N40082;
  full: Full82;
}

interface N10083 {
  h: number;
  w: number;
}

interface N40082 {
  h: number;
  w: number;
}

interface Full82 {
  h: number;
  w: number;
}

interface N217 {
  sizes: Sizes83;
  uploaded_t: number;
  uploader: string;
}

interface Sizes83 {
  '100': N10084;
  '400': N40083;
  full: Full83;
}

interface N10084 {
  h: number;
  w: number;
}

interface N40083 {
  h: number;
  w: number;
}

interface Full83 {
  h: number;
  w: number;
}

interface N218 {
  sizes: Sizes84;
  uploaded_t: number;
  uploader: string;
}

interface Sizes84 {
  '100': N10085;
  '400': N40084;
  full: Full84;
}

interface N10085 {
  h: number;
  w: number;
}

interface N40084 {
  h: number;
  w: number;
}

interface Full84 {
  h: number;
  w: number;
}

interface N219 {
  sizes: Sizes85;
  uploaded_t: number;
  uploader: string;
}

interface Sizes85 {
  '100': N10086;
  '400': N40085;
  full: Full85;
}

interface N10086 {
  h: number;
  w: number;
}

interface N40085 {
  h: number;
  w: number;
}

interface Full85 {
  h: number;
  w: number;
}

interface N22 {
  sizes: Sizes86;
  uploaded_t: string;
  uploader: string;
}

interface Sizes86 {
  '100': N10087;
  '400': N40086;
  full: Full86;
}

interface N10087 {
  h: number;
  w: number;
}

interface N40086 {
  h: number;
  w: number;
}

interface Full86 {
  h: number;
  w: number;
}

interface N220 {
  sizes: Sizes87;
  uploaded_t: number;
  uploader: string;
}

interface Sizes87 {
  '100': N10088;
  '400': N40087;
  full: Full87;
}

interface N10088 {
  h: number;
  w: number;
}

interface N40087 {
  h: number;
  w: number;
}

interface Full87 {
  h: number;
  w: number;
}

interface N221 {
  sizes: Sizes88;
  uploaded_t: number;
  uploader: string;
}

interface Sizes88 {
  '100': N10089;
  '400': N40088;
  full: Full88;
}

interface N10089 {
  h: number;
  w: number;
}

interface N40088 {
  h: number;
  w: number;
}

interface Full88 {
  h: number;
  w: number;
}

interface N223 {
  sizes: Sizes89;
  uploaded_t: number;
  uploader: string;
}

interface Sizes89 {
  '100': N10090;
  '400': N40089;
  full: Full89;
}

interface N10090 {
  h: number;
  w: number;
}

interface N40089 {
  h: number;
  w: number;
}

interface Full89 {
  h: number;
  w: number;
}

interface N225 {
  sizes: Sizes90;
  uploaded_t: number;
  uploader: string;
}

interface Sizes90 {
  '100': N10091;
  '400': N40090;
  full: Full90;
}

interface N10091 {
  h: number;
  w: number;
}

interface N40090 {
  h: number;
  w: number;
}

interface Full90 {
  h: number;
  w: number;
}

interface N226 {
  sizes: Sizes91;
  uploaded_t: number;
  uploader: string;
}

interface Sizes91 {
  '100': N10092;
  '400': N40091;
  full: Full91;
}

interface N10092 {
  h: number;
  w: number;
}

interface N40091 {
  h: number;
  w: number;
}

interface Full91 {
  h: number;
  w: number;
}

interface N227 {
  sizes: Sizes92;
  uploaded_t: string;
  uploader: string;
}

interface Sizes92 {
  '100': N10093;
  '400': N40092;
  full: Full92;
}

interface N10093 {
  h: number;
  w: number;
}

interface N40092 {
  h: number;
  w: number;
}

interface Full92 {
  h: number;
  w: number;
}

interface N228 {
  sizes: Sizes93;
  uploaded_t: string;
  uploader: string;
}

interface Sizes93 {
  '100': N10094;
  '400': N40093;
  full: Full93;
}

interface N10094 {
  h: number;
  w: number;
}

interface N40093 {
  h: number;
  w: number;
}

interface Full93 {
  h: number;
  w: number;
}

interface N229 {
  sizes: Sizes94;
  uploaded_t: number;
  uploader: string;
}

interface Sizes94 {
  '100': N10095;
  '400': N40094;
  full: Full94;
}

interface N10095 {
  h: number;
  w: number;
}

interface N40094 {
  h: number;
  w: number;
}

interface Full94 {
  h: number;
  w: number;
}

interface N230 {
  sizes: Sizes95;
  uploaded_t: number;
  uploader: string;
}

interface Sizes95 {
  '100': N10096;
  '400': N40095;
  full: Full95;
}

interface N10096 {
  h: number;
  w: number;
}

interface N40095 {
  h: number;
  w: number;
}

interface Full95 {
  h: number;
  w: number;
}

interface N231 {
  sizes: Sizes96;
  uploaded_t: number;
  uploader: string;
}

interface Sizes96 {
  '100': N10097;
  '400': N40096;
  full: Full96;
}

interface N10097 {
  h: number;
  w: number;
}

interface N40096 {
  h: number;
  w: number;
}

interface Full96 {
  h: number;
  w: number;
}

interface N232 {
  sizes: Sizes97;
  uploaded_t: number;
  uploader: string;
}

interface Sizes97 {
  '100': N10098;
  '400': N40097;
  full: Full97;
}

interface N10098 {
  h: number;
  w: number;
}

interface N40097 {
  h: number;
  w: number;
}

interface Full97 {
  h: number;
  w: number;
}

interface N233 {
  sizes: Sizes98;
  uploaded_t: number;
  uploader: string;
}

interface Sizes98 {
  '100': N10099;
  '400': N40098;
  full: Full98;
}

interface N10099 {
  h: number;
  w: number;
}

interface N40098 {
  h: number;
  w: number;
}

interface Full98 {
  h: number;
  w: number;
}

interface N234 {
  sizes: Sizes99;
  uploaded_t: number;
  uploader: string;
}

interface Sizes99 {
  '100': N100100;
  '400': N40099;
  full: Full99;
}

interface N100100 {
  h: number;
  w: number;
}

interface N40099 {
  h: number;
  w: number;
}

interface Full99 {
  h: number;
  w: number;
}

interface N235 {
  sizes: Sizes100;
  uploaded_t: number;
  uploader: string;
}

interface Sizes100 {
  '100': N100101;
  '400': N400100;
  full: Full100;
}

interface N100101 {
  h: number;
  w: number;
}

interface N400100 {
  h: number;
  w: number;
}

interface Full100 {
  h: number;
  w: number;
}

interface N236 {
  sizes: Sizes101;
  uploaded_t: string;
  uploader: string;
}

interface Sizes101 {
  '100': N100102;
  '400': N400101;
  full: Full101;
}

interface N100102 {
  h: number;
  w: number;
}

interface N400101 {
  h: number;
  w: number;
}

interface Full101 {
  h: number;
  w: number;
}

interface N237 {
  sizes: Sizes102;
  uploaded_t: number;
  uploader: string;
}

interface Sizes102 {
  '100': N100103;
  '400': N400102;
  full: Full102;
}

interface N100103 {
  h: number;
  w: number;
}

interface N400102 {
  h: number;
  w: number;
}

interface Full102 {
  h: number;
  w: number;
}

interface N238 {
  sizes: Sizes103;
  uploaded_t: number;
  uploader: string;
}

interface Sizes103 {
  '100': N100104;
  '400': N400103;
  full: Full103;
}

interface N100104 {
  h: number;
  w: number;
}

interface N400103 {
  h: number;
  w: number;
}

interface Full103 {
  h: number;
  w: number;
}

interface N239 {
  sizes: Sizes104;
  uploaded_t: string;
  uploader: string;
}

interface Sizes104 {
  '100': N100105;
  '400': N400104;
  full: Full104;
}

interface N100105 {
  h: number;
  w: number;
}

interface N400104 {
  h: number;
  w: number;
}

interface Full104 {
  h: number;
  w: number;
}

interface N24 {
  sizes: Sizes105;
  uploaded_t: string;
  uploader: string;
}

interface Sizes105 {
  '100': N100106;
  '400': N400105;
  full: Full105;
}

interface N100106 {
  h: number;
  w: number;
}

interface N400105 {
  h: number;
  w: number;
}

interface Full105 {
  h: number;
  w: number;
}

interface N240 {
  sizes: Sizes106;
  uploaded_t: number;
  uploader: string;
}

interface Sizes106 {
  '100': N100107;
  '400': N400106;
  full: Full106;
}

interface N100107 {
  h: number;
  w: number;
}

interface N400106 {
  h: number;
  w: number;
}

interface Full106 {
  h: number;
  w: number;
}

interface N241 {
  sizes: Sizes107;
  uploaded_t: number;
  uploader: string;
}

interface Sizes107 {
  '100': N100108;
  '400': N400107;
  full: Full107;
}

interface N100108 {
  h: number;
  w: number;
}

interface N400107 {
  h: number;
  w: number;
}

interface Full107 {
  h: number;
  w: number;
}

interface N243 {
  sizes: Sizes108;
  uploaded_t: number;
  uploader: string;
}

interface Sizes108 {
  '100': N100109;
  '400': N400108;
  full: Full108;
}

interface N100109 {
  h: number;
  w: number;
}

interface N400108 {
  h: number;
  w: number;
}

interface Full108 {
  h: number;
  w: number;
}

interface N244 {
  sizes: Sizes109;
  uploaded_t: number;
  uploader: string;
}

interface Sizes109 {
  '100': N100110;
  '400': N400109;
  full: Full109;
}

interface N100110 {
  h: number;
  w: number;
}

interface N400109 {
  h: number;
  w: number;
}

interface Full109 {
  h: number;
  w: number;
}

interface N248 {
  sizes: Sizes110;
  uploaded_t: number;
  uploader: string;
}

interface Sizes110 {
  '100': N100111;
  '400': N400110;
  full: Full110;
}

interface N100111 {
  h: number;
  w: number;
}

interface N400110 {
  h: number;
  w: number;
}

interface Full110 {
  h: number;
  w: number;
}

interface N249 {
  sizes: Sizes111;
  uploaded_t: number;
  uploader: string;
}

interface Sizes111 {
  '100': N100112;
  '400': N400111;
  full: Full111;
}

interface N100112 {
  h: number;
  w: number;
}

interface N400111 {
  h: number;
  w: number;
}

interface Full111 {
  h: number;
  w: number;
}

interface N25 {
  sizes: Sizes112;
  uploaded_t: string;
  uploader: string;
}

interface Sizes112 {
  '100': N100113;
  '400': N400112;
  full: Full112;
}

interface N100113 {
  h: number;
  w: number;
}

interface N400112 {
  h: number;
  w: number;
}

interface Full112 {
  h: number;
  w: number;
}

interface N250 {
  sizes: Sizes113;
  uploaded_t: number;
  uploader: string;
}

interface Sizes113 {
  '100': N100114;
  '400': N400113;
  full: Full113;
}

interface N100114 {
  h: number;
  w: number;
}

interface N400113 {
  h: number;
  w: number;
}

interface Full113 {
  h: number;
  w: number;
}

interface N251 {
  sizes: Sizes114;
  uploaded_t: number;
  uploader: string;
}

interface Sizes114 {
  '100': N100115;
  '400': N400114;
  full: Full114;
}

interface N100115 {
  h: number;
  w: number;
}

interface N400114 {
  h: number;
  w: number;
}

interface Full114 {
  h: number;
  w: number;
}

interface N253 {
  sizes: Sizes115;
  uploaded_t: number;
  uploader: string;
}

interface Sizes115 {
  '100': N100116;
  '400': N400115;
  full: Full115;
}

interface N100116 {
  h: number;
  w: number;
}

interface N400115 {
  h: number;
  w: number;
}

interface Full115 {
  h: number;
  w: number;
}

interface N254 {
  sizes: Sizes116;
  uploaded_t: number;
  uploader: string;
}

interface Sizes116 {
  '100': N100117;
  '400': N400116;
  full: Full116;
}

interface N100117 {
  h: number;
  w: number;
}

interface N400116 {
  h: number;
  w: number;
}

interface Full116 {
  h: number;
  w: number;
}

interface N255 {
  sizes: Sizes117;
  uploaded_t: number;
  uploader: string;
}

interface Sizes117 {
  '100': N100118;
  '400': N400117;
  full: Full117;
}

interface N100118 {
  h: number;
  w: number;
}

interface N400117 {
  h: number;
  w: number;
}

interface Full117 {
  h: number;
  w: number;
}

interface N256 {
  sizes: Sizes118;
  uploaded_t: number;
  uploader: string;
}

interface Sizes118 {
  '100': N100119;
  '400': N400118;
  full: Full118;
}

interface N100119 {
  h: number;
  w: number;
}

interface N400118 {
  h: number;
  w: number;
}

interface Full118 {
  h: number;
  w: number;
}

interface N257 {
  sizes: Sizes119;
  uploaded_t: number;
  uploader: string;
}

interface Sizes119 {
  '100': N100120;
  '400': N400119;
  full: Full119;
}

interface N100120 {
  h: number;
  w: number;
}

interface N400119 {
  h: number;
  w: number;
}

interface Full119 {
  h: number;
  w: number;
}

interface N258 {
  sizes: Sizes120;
  uploaded_t: number;
  uploader: string;
}

interface Sizes120 {
  '100': N100121;
  '400': N400120;
  full: Full120;
}

interface N100121 {
  h: number;
  w: number;
}

interface N400120 {
  h: number;
  w: number;
}

interface Full120 {
  h: number;
  w: number;
}

interface N26 {
  sizes: Sizes121;
  uploaded_t: string;
  uploader: string;
}

interface Sizes121 {
  '100': N100122;
  '400': N400121;
  full: Full121;
}

interface N100122 {
  h: number;
  w: number;
}

interface N400121 {
  h: number;
  w: number;
}

interface Full121 {
  h: number;
  w: number;
}

interface N260 {
  sizes: Sizes122;
  uploaded_t: number;
  uploader: string;
}

interface Sizes122 {
  '100': N100123;
  '400': N400122;
  full: Full122;
}

interface N100123 {
  h: number;
  w: number;
}

interface N400122 {
  h: number;
  w: number;
}

interface Full122 {
  h: number;
  w: number;
}

interface N261 {
  sizes: Sizes123;
  uploaded_t: number;
  uploader: string;
}

interface Sizes123 {
  '100': N100124;
  '400': N400123;
  full: Full123;
}

interface N100124 {
  h: number;
  w: number;
}

interface N400123 {
  h: number;
  w: number;
}

interface Full123 {
  h: number;
  w: number;
}

interface N262 {
  sizes: Sizes124;
  uploaded_t: number;
  uploader: string;
}

interface Sizes124 {
  '100': N100125;
  '400': N400124;
  full: Full124;
}

interface N100125 {
  h: number;
  w: number;
}

interface N400124 {
  h: number;
  w: number;
}

interface Full124 {
  h: number;
  w: number;
}

interface N263 {
  sizes: Sizes125;
  uploaded_t: number;
  uploader: string;
}

interface Sizes125 {
  '100': N100126;
  '400': N400125;
  full: Full125;
}

interface N100126 {
  h: number;
  w: number;
}

interface N400125 {
  h: number;
  w: number;
}

interface Full125 {
  h: number;
  w: number;
}

interface N264 {
  sizes: Sizes126;
  uploaded_t: number;
  uploader: string;
}

interface Sizes126 {
  '100': N100127;
  '400': N400126;
  full: Full126;
}

interface N100127 {
  h: number;
  w: number;
}

interface N400126 {
  h: number;
  w: number;
}

interface Full126 {
  h: number;
  w: number;
}

interface N265 {
  sizes: Sizes127;
  uploaded_t: number;
  uploader: string;
}

interface Sizes127 {
  '100': N100128;
  '400': N400127;
  full: Full127;
}

interface N100128 {
  h: number;
  w: number;
}

interface N400127 {
  h: number;
  w: number;
}

interface Full127 {
  h: number;
  w: number;
}

interface N266 {
  sizes: Sizes128;
  uploaded_t: number;
  uploader: string;
}

interface Sizes128 {
  '100': N100129;
  '400': N400128;
  full: Full128;
}

interface N100129 {
  h: number;
  w: number;
}

interface N400128 {
  h: number;
  w: number;
}

interface Full128 {
  h: number;
  w: number;
}

interface N267 {
  sizes: Sizes129;
  uploaded_t: number;
  uploader: string;
}

interface Sizes129 {
  '100': N100130;
  '400': N400129;
  full: Full129;
}

interface N100130 {
  h: number;
  w: number;
}

interface N400129 {
  h: number;
  w: number;
}

interface Full129 {
  h: number;
  w: number;
}

interface N268 {
  sizes: Sizes130;
  uploaded_t: number;
  uploader: string;
}

interface Sizes130 {
  '100': N100131;
  '400': N400130;
  full: Full130;
}

interface N100131 {
  h: number;
  w: number;
}

interface N400130 {
  h: number;
  w: number;
}

interface Full130 {
  h: number;
  w: number;
}

interface N269 {
  sizes: Sizes131;
  uploaded_t: number;
  uploader: string;
}

interface Sizes131 {
  '100': N100132;
  '400': N400131;
  full: Full131;
}

interface N100132 {
  h: number;
  w: number;
}

interface N400131 {
  h: number;
  w: number;
}

interface Full131 {
  h: number;
  w: number;
}

interface N27 {
  sizes: Sizes132;
  uploaded_t: string;
  uploader: string;
}

interface Sizes132 {
  '100': N100133;
  '400': N400132;
  full: Full132;
}

interface N100133 {
  h: number;
  w: number;
}

interface N400132 {
  h: number;
  w: number;
}

interface Full132 {
  h: number;
  w: number;
}

interface N270 {
  sizes: Sizes133;
  uploaded_t: number;
  uploader: string;
}

interface Sizes133 {
  '100': N100134;
  '400': N400133;
  full: Full133;
}

interface N100134 {
  h: number;
  w: number;
}

interface N400133 {
  h: number;
  w: number;
}

interface Full133 {
  h: number;
  w: number;
}

interface N272 {
  sizes: Sizes134;
  uploaded_t: number;
  uploader: string;
}

interface Sizes134 {
  '100': N100135;
  '400': N400134;
  full: Full134;
}

interface N100135 {
  h: number;
  w: number;
}

interface N400134 {
  h: number;
  w: number;
}

interface Full134 {
  h: number;
  w: number;
}

interface N273 {
  sizes: Sizes135;
  uploaded_t: number;
  uploader: string;
}

interface Sizes135 {
  '100': N100136;
  '400': N400135;
  full: Full135;
}

interface N100136 {
  h: number;
  w: number;
}

interface N400135 {
  h: number;
  w: number;
}

interface Full135 {
  h: number;
  w: number;
}

interface N276 {
  sizes: Sizes136;
  uploaded_t: number;
  uploader: string;
}

interface Sizes136 {
  '100': N100137;
  '400': N400136;
  full: Full136;
}

interface N100137 {
  h: number;
  w: number;
}

interface N400136 {
  h: number;
  w: number;
}

interface Full136 {
  h: number;
  w: number;
}

interface N279 {
  sizes: Sizes137;
  uploaded_t: number;
  uploader: string;
}

interface Sizes137 {
  '100': N100138;
  '400': N400137;
  full: Full137;
}

interface N100138 {
  h: number;
  w: number;
}

interface N400137 {
  h: number;
  w: number;
}

interface Full137 {
  h: number;
  w: number;
}

interface N28 {
  sizes: Sizes138;
  uploaded_t: string;
  uploader: string;
}

interface Sizes138 {
  '100': N100139;
  '400': N400138;
  full: Full138;
}

interface N100139 {
  h: number;
  w: number;
}

interface N400138 {
  h: number;
  w: number;
}

interface Full138 {
  h: number;
  w: number;
}

interface N280 {
  sizes: Sizes139;
  uploaded_t: number;
  uploader: string;
}

interface Sizes139 {
  '100': N100140;
  '400': N400139;
  full: Full139;
}

interface N100140 {
  h: number;
  w: number;
}

interface N400139 {
  h: number;
  w: number;
}

interface Full139 {
  h: number;
  w: number;
}

interface N281 {
  sizes: Sizes140;
  uploaded_t: number;
  uploader: string;
}

interface Sizes140 {
  '100': N100141;
  '400': N400140;
  full: Full140;
}

interface N100141 {
  h: number;
  w: number;
}

interface N400140 {
  h: number;
  w: number;
}

interface Full140 {
  h: number;
  w: number;
}

interface N282 {
  sizes: Sizes141;
  uploaded_t: number;
  uploader: string;
}

interface Sizes141 {
  '100': N100142;
  '400': N400141;
  full: Full141;
}

interface N100142 {
  h: number;
  w: number;
}

interface N400141 {
  h: number;
  w: number;
}

interface Full141 {
  h: number;
  w: number;
}

interface N284 {
  sizes: Sizes142;
  uploaded_t: number;
  uploader: string;
}

interface Sizes142 {
  '100': N100143;
  '400': N400142;
  full: Full142;
}

interface N100143 {
  h: number;
  w: number;
}

interface N400142 {
  h: number;
  w: number;
}

interface Full142 {
  h: number;
  w: number;
}

interface N285 {
  sizes: Sizes143;
  uploaded_t: number;
  uploader: string;
}

interface Sizes143 {
  '100': N100144;
  '400': N400143;
  full: Full143;
}

interface N100144 {
  h: number;
  w: number;
}

interface N400143 {
  h: number;
  w: number;
}

interface Full143 {
  h: number;
  w: number;
}

interface N286 {
  sizes: Sizes144;
  uploaded_t: number;
  uploader: string;
}

interface Sizes144 {
  '100': N100145;
  '400': N400144;
  full: Full144;
}

interface N100145 {
  h: number;
  w: number;
}

interface N400144 {
  h: number;
  w: number;
}

interface Full144 {
  h: number;
  w: number;
}

interface N287 {
  sizes: Sizes145;
  uploaded_t: number;
  uploader: string;
}

interface Sizes145 {
  '100': N100146;
  '400': N400145;
  full: Full145;
}

interface N100146 {
  h: number;
  w: number;
}

interface N400145 {
  h: number;
  w: number;
}

interface Full145 {
  h: number;
  w: number;
}

interface N288 {
  sizes: Sizes146;
  uploaded_t: number;
  uploader: string;
}

interface Sizes146 {
  '100': N100147;
  '400': N400146;
  full: Full146;
}

interface N100147 {
  h: number;
  w: number;
}

interface N400146 {
  h: number;
  w: number;
}

interface Full146 {
  h: number;
  w: number;
}

interface N289 {
  sizes: Sizes147;
  uploaded_t: number;
  uploader: string;
}

interface Sizes147 {
  '100': N100148;
  '400': N400147;
  full: Full147;
}

interface N100148 {
  h: number;
  w: number;
}

interface N400147 {
  h: number;
  w: number;
}

interface Full147 {
  h: number;
  w: number;
}

interface N29 {
  sizes: Sizes148;
  uploaded_t: string;
  uploader: string;
}

interface Sizes148 {
  '100': N100149;
  '400': N400148;
  full: Full148;
}

interface N100149 {
  h: number;
  w: number;
}

interface N400148 {
  h: number;
  w: number;
}

interface Full148 {
  h: number;
  w: number;
}

interface N291 {
  sizes: Sizes149;
  uploaded_t: number;
  uploader: string;
}

interface Sizes149 {
  '100': N100150;
  '400': N400149;
  full: Full149;
}

interface N100150 {
  h: number;
  w: number;
}

interface N400149 {
  h: number;
  w: number;
}

interface Full149 {
  h: number;
  w: number;
}

interface N293 {
  sizes: Sizes150;
  uploaded_t: number;
  uploader: string;
}

interface Sizes150 {
  '100': N100151;
  '400': N400150;
  full: Full150;
}

interface N100151 {
  h: number;
  w: number;
}

interface N400150 {
  h: number;
  w: number;
}

interface Full150 {
  h: number;
  w: number;
}

interface N294 {
  sizes: Sizes151;
  uploaded_t: number;
  uploader: string;
}

interface Sizes151 {
  '100': N100152;
  '400': N400151;
  full: Full151;
}

interface N100152 {
  h: number;
  w: number;
}

interface N400151 {
  h: number;
  w: number;
}

interface Full151 {
  h: number;
  w: number;
}

interface N295 {
  sizes: Sizes152;
  uploaded_t: number;
  uploader: string;
}

interface Sizes152 {
  '100': N100153;
  '400': N400152;
  full: Full152;
}

interface N100153 {
  h: number;
  w: number;
}

interface N400152 {
  h: number;
  w: number;
}

interface Full152 {
  h: number;
  w: number;
}

interface N297 {
  sizes: Sizes153;
  uploaded_t: number;
  uploader: string;
}

interface Sizes153 {
  '100': N100154;
  '400': N400153;
  full: Full153;
}

interface N100154 {
  h: number;
  w: number;
}

interface N400153 {
  h: number;
  w: number;
}

interface Full153 {
  h: number;
  w: number;
}

interface N299 {
  sizes: Sizes154;
  uploaded_t: number;
  uploader: string;
}

interface Sizes154 {
  '100': N100155;
  '400': N400154;
  full: Full154;
}

interface N100155 {
  h: number;
  w: number;
}

interface N400154 {
  h: number;
  w: number;
}

interface Full154 {
  h: number;
  w: number;
}

interface N3 {
  sizes: Sizes155;
  uploaded_t: number;
  uploader: string;
}

interface Sizes155 {
  '100': N100156;
  '400': N400155;
  full: Full155;
}

interface N100156 {
  h: number;
  w: number;
}

interface N400155 {
  h: number;
  w: number;
}

interface Full155 {
  h: number;
  w: number;
}

interface N301 {
  sizes: Sizes156;
  uploaded_t: number;
  uploader: string;
}

interface Sizes156 {
  '100': N100157;
  '400': N400156;
  full: Full156;
}

interface N100157 {
  h: number;
  w: number;
}

interface N400156 {
  h: number;
  w: number;
}

interface Full156 {
  h: number;
  w: number;
}

interface N304 {
  sizes: Sizes157;
  uploaded_t: number;
  uploader: string;
}

interface Sizes157 {
  '100': N100158;
  '400': N400157;
  full: Full157;
}

interface N100158 {
  h: number;
  w: number;
}

interface N400157 {
  h: number;
  w: number;
}

interface Full157 {
  h: number;
  w: number;
}

interface N305 {
  sizes: Sizes158;
  uploaded_t: number;
  uploader: string;
}

interface Sizes158 {
  '100': N100159;
  '400': N400158;
  full: Full158;
}

interface N100159 {
  h: number;
  w: number;
}

interface N400158 {
  h: number;
  w: number;
}

interface Full158 {
  h: number;
  w: number;
}

interface N306 {
  sizes: Sizes159;
  uploaded_t: number;
  uploader: string;
}

interface Sizes159 {
  '100': N100160;
  '400': N400159;
  full: Full159;
}

interface N100160 {
  h: number;
  w: number;
}

interface N400159 {
  h: number;
  w: number;
}

interface Full159 {
  h: number;
  w: number;
}

interface N307 {
  sizes: Sizes160;
  uploaded_t: number;
  uploader: string;
}

interface Sizes160 {
  '100': N100161;
  '400': N400160;
  full: Full160;
}

interface N100161 {
  h: number;
  w: number;
}

interface N400160 {
  h: number;
  w: number;
}

interface Full160 {
  h: number;
  w: number;
}

interface N308 {
  sizes: Sizes161;
  uploaded_t: number;
  uploader: string;
}

interface Sizes161 {
  '100': N100162;
  '400': N400161;
  full: Full161;
}

interface N100162 {
  h: number;
  w: number;
}

interface N400161 {
  h: number;
  w: number;
}

interface Full161 {
  h: number;
  w: number;
}

interface N309 {
  sizes: Sizes162;
  uploaded_t: number;
  uploader: string;
}

interface Sizes162 {
  '100': N100163;
  '400': N400162;
  full: Full162;
}

interface N100163 {
  h: number;
  w: number;
}

interface N400162 {
  h: number;
  w: number;
}

interface Full162 {
  h: number;
  w: number;
}

interface N31 {
  sizes: Sizes163;
  uploaded_t: string;
  uploader: string;
}

interface Sizes163 {
  '100': N100164;
  '400': N400163;
  full: Full163;
}

interface N100164 {
  h: number;
  w: number;
}

interface N400163 {
  h: number;
  w: number;
}

interface Full163 {
  h: number;
  w: number;
}

interface N310 {
  sizes: Sizes164;
  uploaded_t: number;
  uploader: string;
}

interface Sizes164 {
  '100': N100165;
  '400': N400164;
  full: Full164;
}

interface N100165 {
  h: number;
  w: number;
}

interface N400164 {
  h: number;
  w: number;
}

interface Full164 {
  h: number;
  w: number;
}

interface N311 {
  sizes: Sizes165;
  uploaded_t: number;
  uploader: string;
}

interface Sizes165 {
  '100': N100166;
  '400': N400165;
  full: Full165;
}

interface N100166 {
  h: number;
  w: number;
}

interface N400165 {
  h: number;
  w: number;
}

interface Full165 {
  h: number;
  w: number;
}

interface N312 {
  sizes: Sizes166;
  uploaded_t: number;
  uploader: string;
}

interface Sizes166 {
  '100': N100167;
  '400': N400166;
  full: Full166;
}

interface N100167 {
  h: number;
  w: number;
}

interface N400166 {
  h: number;
  w: number;
}

interface Full166 {
  h: number;
  w: number;
}

interface N313 {
  sizes: Sizes167;
  uploaded_t: number;
  uploader: string;
}

interface Sizes167 {
  '100': N100168;
  '400': N400167;
  full: Full167;
}

interface N100168 {
  h: number;
  w: number;
}

interface N400167 {
  h: number;
  w: number;
}

interface Full167 {
  h: number;
  w: number;
}

interface N314 {
  sizes: Sizes168;
  uploaded_t: number;
  uploader: string;
}

interface Sizes168 {
  '100': N100169;
  '400': N400168;
  full: Full168;
}

interface N100169 {
  h: number;
  w: number;
}

interface N400168 {
  h: number;
  w: number;
}

interface Full168 {
  h: number;
  w: number;
}

interface N315 {
  sizes: Sizes169;
  uploaded_t: number;
  uploader: string;
}

interface Sizes169 {
  '100': N100170;
  '400': N400169;
  full: Full169;
}

interface N100170 {
  h: number;
  w: number;
}

interface N400169 {
  h: number;
  w: number;
}

interface Full169 {
  h: number;
  w: number;
}

interface N316 {
  sizes: Sizes170;
  uploaded_t: number;
  uploader: string;
}

interface Sizes170 {
  '100': N100171;
  '400': N400170;
  full: Full170;
}

interface N100171 {
  h: number;
  w: number;
}

interface N400170 {
  h: number;
  w: number;
}

interface Full170 {
  h: number;
  w: number;
}

interface N317 {
  sizes: Sizes171;
  uploaded_t: number;
  uploader: string;
}

interface Sizes171 {
  '100': N100172;
  '400': N400171;
  full: Full171;
}

interface N100172 {
  h: number;
  w: number;
}

interface N400171 {
  h: number;
  w: number;
}

interface Full171 {
  h: number;
  w: number;
}

interface N318 {
  sizes: Sizes172;
  uploaded_t: number;
  uploader: string;
}

interface Sizes172 {
  '100': N100173;
  '400': N400172;
  full: Full172;
}

interface N100173 {
  h: number;
  w: number;
}

interface N400172 {
  h: number;
  w: number;
}

interface Full172 {
  h: number;
  w: number;
}

interface N319 {
  sizes: Sizes173;
  uploaded_t: number;
  uploader: string;
}

interface Sizes173 {
  '100': N100174;
  '400': N400173;
  full: Full173;
}

interface N100174 {
  h: number;
  w: number;
}

interface N400173 {
  h: number;
  w: number;
}

interface Full173 {
  h: number;
  w: number;
}

interface N32 {
  sizes: Sizes174;
  uploaded_t: string;
  uploader: string;
}

interface Sizes174 {
  '100': N100175;
  '400': N400174;
  full: Full174;
}

interface N100175 {
  h: number;
  w: number;
}

interface N400174 {
  h: number;
  w: number;
}

interface Full174 {
  h: number;
  w: number;
}

interface N320 {
  sizes: Sizes175;
  uploaded_t: number;
  uploader: string;
}

interface Sizes175 {
  '100': N100176;
  '400': N400175;
  full: Full175;
}

interface N100176 {
  h: number;
  w: number;
}

interface N400175 {
  h: number;
  w: number;
}

interface Full175 {
  h: number;
  w: number;
}

interface N321 {
  sizes: Sizes176;
  uploaded_t: number;
  uploader: string;
}

interface Sizes176 {
  '100': N100177;
  '400': N400176;
  full: Full176;
}

interface N100177 {
  h: number;
  w: number;
}

interface N400176 {
  h: number;
  w: number;
}

interface Full176 {
  h: number;
  w: number;
}

interface N323 {
  sizes: Sizes177;
  uploaded_t: number;
  uploader: string;
}

interface Sizes177 {
  '100': N100178;
  '400': N400177;
  full: Full177;
}

interface N100178 {
  h: number;
  w: number;
}

interface N400177 {
  h: number;
  w: number;
}

interface Full177 {
  h: number;
  w: number;
}

interface N324 {
  sizes: Sizes178;
  uploaded_t: number;
  uploader: string;
}

interface Sizes178 {
  '100': N100179;
  '400': N400178;
  full: Full178;
}

interface N100179 {
  h: number;
  w: number;
}

interface N400178 {
  h: number;
  w: number;
}

interface Full178 {
  h: number;
  w: number;
}

interface N325 {
  sizes: Sizes179;
  uploaded_t: number;
  uploader: string;
}

interface Sizes179 {
  '100': N100180;
  '400': N400179;
  full: Full179;
}

interface N100180 {
  h: number;
  w: number;
}

interface N400179 {
  h: number;
  w: number;
}

interface Full179 {
  h: number;
  w: number;
}

interface N328 {
  sizes: Sizes180;
  uploaded_t: number;
  uploader: string;
}

interface Sizes180 {
  '100': N100181;
  '400': N400180;
  full: Full180;
}

interface N100181 {
  h: number;
  w: number;
}

interface N400180 {
  h: number;
  w: number;
}

interface Full180 {
  h: number;
  w: number;
}

interface N329 {
  sizes: Sizes181;
  uploaded_t: number;
  uploader: string;
}

interface Sizes181 {
  '100': N100182;
  '400': N400181;
  full: Full181;
}

interface N100182 {
  h: number;
  w: number;
}

interface N400181 {
  h: number;
  w: number;
}

interface Full181 {
  h: number;
  w: number;
}

interface N33 {
  sizes: Sizes182;
  uploaded_t: string;
  uploader: string;
}

interface Sizes182 {
  '100': N100183;
  '400': N400182;
  full: Full182;
}

interface N100183 {
  h: number;
  w: number;
}

interface N400182 {
  h: number;
  w: number;
}

interface Full182 {
  h: number;
  w: number;
}

interface N330 {
  sizes: Sizes183;
  uploaded_t: number;
  uploader: string;
}

interface Sizes183 {
  '100': N100184;
  '400': N400183;
  full: Full183;
}

interface N100184 {
  h: number;
  w: number;
}

interface N400183 {
  h: number;
  w: number;
}

interface Full183 {
  h: number;
  w: number;
}

interface N331 {
  sizes: Sizes184;
  uploaded_t: number;
  uploader: string;
}

interface Sizes184 {
  '100': N100185;
  '400': N400184;
  full: Full184;
}

interface N100185 {
  h: number;
  w: number;
}

interface N400184 {
  h: number;
  w: number;
}

interface Full184 {
  h: number;
  w: number;
}

interface N332 {
  sizes: Sizes185;
  uploaded_t: number;
  uploader: string;
}

interface Sizes185 {
  '100': N100186;
  '400': N400185;
  full: Full185;
}

interface N100186 {
  h: number;
  w: number;
}

interface N400185 {
  h: number;
  w: number;
}

interface Full185 {
  h: number;
  w: number;
}

interface N333 {
  sizes: Sizes186;
  uploaded_t: number;
  uploader: string;
}

interface Sizes186 {
  '100': N100187;
  '400': N400186;
  full: Full186;
}

interface N100187 {
  h: number;
  w: number;
}

interface N400186 {
  h: number;
  w: number;
}

interface Full186 {
  h: number;
  w: number;
}

interface N334 {
  sizes: Sizes187;
  uploaded_t: number;
  uploader: string;
}

interface Sizes187 {
  '100': N100188;
  '400': N400187;
  full: Full187;
}

interface N100188 {
  h: number;
  w: number;
}

interface N400187 {
  h: number;
  w: number;
}

interface Full187 {
  h: number;
  w: number;
}

interface N335 {
  sizes: Sizes188;
  uploaded_t: number;
  uploader: string;
}

interface Sizes188 {
  '100': N100189;
  '400': N400188;
  full: Full188;
}

interface N100189 {
  h: number;
  w: number;
}

interface N400188 {
  h: number;
  w: number;
}

interface Full188 {
  h: number;
  w: number;
}

interface N338 {
  sizes: Sizes189;
  uploaded_t: number;
  uploader: string;
}

interface Sizes189 {
  '100': N100190;
  '400': N400189;
  full: Full189;
}

interface N100190 {
  h: number;
  w: number;
}

interface N400189 {
  h: number;
  w: number;
}

interface Full189 {
  h: number;
  w: number;
}

interface N339 {
  sizes: Sizes190;
  uploaded_t: number;
  uploader: string;
}

interface Sizes190 {
  '100': N100191;
  '400': N400190;
  full: Full190;
}

interface N100191 {
  h: number;
  w: number;
}

interface N400190 {
  h: number;
  w: number;
}

interface Full190 {
  h: number;
  w: number;
}

interface N340 {
  sizes: Sizes191;
  uploaded_t: number;
  uploader: string;
}

interface Sizes191 {
  '100': N100192;
  '400': N400191;
  full: Full191;
}

interface N100192 {
  h: number;
  w: number;
}

interface N400191 {
  h: number;
  w: number;
}

interface Full191 {
  h: number;
  w: number;
}

interface N341 {
  sizes: Sizes192;
  uploaded_t: number;
  uploader: string;
}

interface Sizes192 {
  '100': N100193;
  '400': N400192;
  full: Full192;
}

interface N100193 {
  h: number;
  w: number;
}

interface N400192 {
  h: number;
  w: number;
}

interface Full192 {
  h: number;
  w: number;
}

interface N342 {
  sizes: Sizes193;
  uploaded_t: number;
  uploader: string;
}

interface Sizes193 {
  '100': N100194;
  '400': N400193;
  full: Full193;
}

interface N100194 {
  h: number;
  w: number;
}

interface N400193 {
  h: number;
  w: number;
}

interface Full193 {
  h: number;
  w: number;
}

interface N343 {
  sizes: Sizes194;
  uploaded_t: number;
  uploader: string;
}

interface Sizes194 {
  '100': N100195;
  '400': N400194;
  full: Full194;
}

interface N100195 {
  h: number;
  w: number;
}

interface N400194 {
  h: number;
  w: number;
}

interface Full194 {
  h: number;
  w: number;
}

interface N344 {
  sizes: Sizes195;
  uploaded_t: number;
  uploader: string;
}

interface Sizes195 {
  '100': N100196;
  '400': N400195;
  full: Full195;
}

interface N100196 {
  h: number;
  w: number;
}

interface N400195 {
  h: number;
  w: number;
}

interface Full195 {
  h: number;
  w: number;
}

interface N345 {
  sizes: Sizes196;
  uploaded_t: number;
  uploader: string;
}

interface Sizes196 {
  '100': N100197;
  '400': N400196;
  full: Full196;
}

interface N100197 {
  h: number;
  w: number;
}

interface N400196 {
  h: number;
  w: number;
}

interface Full196 {
  h: number;
  w: number;
}

interface N346 {
  sizes: Sizes197;
  uploaded_t: number;
  uploader: string;
}

interface Sizes197 {
  '100': N100198;
  '400': N400197;
  full: Full197;
}

interface N100198 {
  h: number;
  w: number;
}

interface N400197 {
  h: number;
  w: number;
}

interface Full197 {
  h: number;
  w: number;
}

interface N347 {
  sizes: Sizes198;
  uploaded_t: number;
  uploader: string;
}

interface Sizes198 {
  '100': N100199;
  '400': N400198;
  full: Full198;
}

interface N100199 {
  h: number;
  w: number;
}

interface N400198 {
  h: number;
  w: number;
}

interface Full198 {
  h: number;
  w: number;
}

interface N348 {
  sizes: Sizes199;
  uploaded_t: number;
  uploader: string;
}

interface Sizes199 {
  '100': N100200;
  '400': N400199;
  full: Full199;
}

interface N100200 {
  h: number;
  w: number;
}

interface N400199 {
  h: number;
  w: number;
}

interface Full199 {
  h: number;
  w: number;
}

interface N349 {
  sizes: Sizes200;
  uploaded_t: number;
  uploader: string;
}

interface Sizes200 {
  '100': N100201;
  '400': N400200;
  full: Full200;
}

interface N100201 {
  h: number;
  w: number;
}

interface N400200 {
  h: number;
  w: number;
}

interface Full200 {
  h: number;
  w: number;
}

interface N350 {
  sizes: Sizes201;
  uploaded_t: number;
  uploader: string;
}

interface Sizes201 {
  '100': N100202;
  '400': N400201;
  full: Full201;
}

interface N100202 {
  h: number;
  w: number;
}

interface N400201 {
  h: number;
  w: number;
}

interface Full201 {
  h: number;
  w: number;
}

interface N351 {
  sizes: Sizes202;
  uploaded_t: number;
  uploader: string;
}

interface Sizes202 {
  '100': N100203;
  '400': N400202;
  full: Full202;
}

interface N100203 {
  h: number;
  w: number;
}

interface N400202 {
  h: number;
  w: number;
}

interface Full202 {
  h: number;
  w: number;
}

interface N352 {
  sizes: Sizes203;
  uploaded_t: number;
  uploader: string;
}

interface Sizes203 {
  '100': N100204;
  '400': N400203;
  full: Full203;
}

interface N100204 {
  h: number;
  w: number;
}

interface N400203 {
  h: number;
  w: number;
}

interface Full203 {
  h: number;
  w: number;
}

interface N353 {
  sizes: Sizes204;
  uploaded_t: number;
  uploader: string;
}

interface Sizes204 {
  '100': N100205;
  '400': N400204;
  full: Full204;
}

interface N100205 {
  h: number;
  w: number;
}

interface N400204 {
  h: number;
  w: number;
}

interface Full204 {
  h: number;
  w: number;
}

interface N354 {
  sizes: Sizes205;
  uploaded_t: number;
  uploader: string;
}

interface Sizes205 {
  '100': N100206;
  '400': N400205;
  full: Full205;
}

interface N100206 {
  h: number;
  w: number;
}

interface N400205 {
  h: number;
  w: number;
}

interface Full205 {
  h: number;
  w: number;
}

interface N355 {
  sizes: Sizes206;
  uploaded_t: number;
  uploader: string;
}

interface Sizes206 {
  '100': N100207;
  '400': N400206;
  full: Full206;
}

interface N100207 {
  h: number;
  w: number;
}

interface N400206 {
  h: number;
  w: number;
}

interface Full206 {
  h: number;
  w: number;
}

interface N356 {
  sizes: Sizes207;
  uploaded_t: number;
  uploader: string;
}

interface Sizes207 {
  '100': N100208;
  '400': N400207;
  full: Full207;
}

interface N100208 {
  h: number;
  w: number;
}

interface N400207 {
  h: number;
  w: number;
}

interface Full207 {
  h: number;
  w: number;
}

interface N357 {
  sizes: Sizes208;
  uploaded_t: number;
  uploader: string;
}

interface Sizes208 {
  '100': N100209;
  '400': N400208;
  full: Full208;
}

interface N100209 {
  h: number;
  w: number;
}

interface N400208 {
  h: number;
  w: number;
}

interface Full208 {
  h: number;
  w: number;
}

interface N358 {
  sizes: Sizes209;
  uploaded_t: number;
  uploader: string;
}

interface Sizes209 {
  '100': N100210;
  '400': N400209;
  full: Full209;
}

interface N100210 {
  h: number;
  w: number;
}

interface N400209 {
  h: number;
  w: number;
}

interface Full209 {
  h: number;
  w: number;
}

interface N360 {
  sizes: Sizes210;
  uploaded_t: number;
  uploader: string;
}

interface Sizes210 {
  '100': N100211;
  '400': N400210;
  full: Full210;
}

interface N100211 {
  h: number;
  w: number;
}

interface N400210 {
  h: number;
  w: number;
}

interface Full210 {
  h: number;
  w: number;
}

interface N361 {
  sizes: Sizes211;
  uploaded_t: number;
  uploader: string;
}

interface Sizes211 {
  '100': N100212;
  '400': N400211;
  full: Full211;
}

interface N100212 {
  h: number;
  w: number;
}

interface N400211 {
  h: number;
  w: number;
}

interface Full211 {
  h: number;
  w: number;
}

interface N362 {
  sizes: Sizes212;
  uploaded_t: string;
  uploader: string;
}

interface Sizes212 {
  '100': N100213;
  '400': N400212;
  full: Full212;
}

interface N100213 {
  h: number;
  w: number;
}

interface N400212 {
  h: number;
  w: number;
}

interface Full212 {
  h: number;
  w: number;
}

interface N363 {
  sizes: Sizes213;
  uploaded_t: string;
  uploader: string;
}

interface Sizes213 {
  '100': N100214;
  '400': N400213;
  full: Full213;
}

interface N100214 {
  h: number;
  w: number;
}

interface N400213 {
  h: number;
  w: number;
}

interface Full213 {
  h: number;
  w: number;
}

interface N364 {
  sizes: Sizes214;
  uploaded_t: number;
  uploader: string;
}

interface Sizes214 {
  '100': N100215;
  '400': N400214;
  full: Full214;
}

interface N100215 {
  h: number;
  w: number;
}

interface N400214 {
  h: number;
  w: number;
}

interface Full214 {
  h: number;
  w: number;
}

interface N365 {
  sizes: Sizes215;
  uploaded_t: number;
  uploader: string;
}

interface Sizes215 {
  '100': N100216;
  '400': N400215;
  full: Full215;
}

interface N100216 {
  h: number;
  w: number;
}

interface N400215 {
  h: number;
  w: number;
}

interface Full215 {
  h: number;
  w: number;
}

interface N366 {
  sizes: Sizes216;
  uploaded_t: number;
  uploader: string;
}

interface Sizes216 {
  '100': N100217;
  '400': N400216;
  full: Full216;
}

interface N100217 {
  h: number;
  w: number;
}

interface N400216 {
  h: number;
  w: number;
}

interface Full216 {
  h: number;
  w: number;
}

interface N367 {
  sizes: Sizes217;
  uploaded_t: number;
  uploader: string;
}

interface Sizes217 {
  '100': N100218;
  '400': N400217;
  full: Full217;
}

interface N100218 {
  h: number;
  w: number;
}

interface N400217 {
  h: number;
  w: number;
}

interface Full217 {
  h: number;
  w: number;
}

interface N368 {
  sizes: Sizes218;
  uploaded_t: number;
  uploader: string;
}

interface Sizes218 {
  '100': N100219;
  '400': N400218;
  full: Full218;
}

interface N100219 {
  h: number;
  w: number;
}

interface N400218 {
  h: number;
  w: number;
}

interface Full218 {
  h: number;
  w: number;
}

interface N369 {
  sizes: Sizes219;
  uploaded_t: number;
  uploader: string;
}

interface Sizes219 {
  '100': N100220;
  '400': N400219;
  full: Full219;
}

interface N100220 {
  h: number;
  w: number;
}

interface N400219 {
  h: number;
  w: number;
}

interface Full219 {
  h: number;
  w: number;
}

interface N370 {
  sizes: Sizes220;
  uploaded_t: number;
  uploader: string;
}

interface Sizes220 {
  '100': N100221;
  '400': N400220;
  full: Full220;
}

interface N100221 {
  h: number;
  w: number;
}

interface N400220 {
  h: number;
  w: number;
}

interface Full220 {
  h: number;
  w: number;
}

interface N371 {
  sizes: Sizes221;
  uploaded_t: number;
  uploader: string;
}

interface Sizes221 {
  '100': N100222;
  '400': N400221;
  full: Full221;
}

interface N100222 {
  h: number;
  w: number;
}

interface N400221 {
  h: number;
  w: number;
}

interface Full221 {
  h: number;
  w: number;
}

interface N373 {
  sizes: Sizes222;
  uploaded_t: number;
  uploader: string;
}

interface Sizes222 {
  '100': N100223;
  '400': N400222;
  full: Full222;
}

interface N100223 {
  h: number;
  w: number;
}

interface N400222 {
  h: number;
  w: number;
}

interface Full222 {
  h: number;
  w: number;
}

interface N374 {
  sizes: Sizes223;
  uploaded_t: number;
  uploader: string;
}

interface Sizes223 {
  '100': N100224;
  '400': N400223;
  full: Full223;
}

interface N100224 {
  h: number;
  w: number;
}

interface N400223 {
  h: number;
  w: number;
}

interface Full223 {
  h: number;
  w: number;
}

interface N375 {
  sizes: Sizes224;
  uploaded_t: number;
  uploader: string;
}

interface Sizes224 {
  '100': N100225;
  '400': N400224;
  full: Full224;
}

interface N100225 {
  h: number;
  w: number;
}

interface N400224 {
  h: number;
  w: number;
}

interface Full224 {
  h: number;
  w: number;
}

interface N376 {
  sizes: Sizes225;
  uploaded_t: number;
  uploader: string;
}

interface Sizes225 {
  '100': N100226;
  '400': N400225;
  full: Full225;
}

interface N100226 {
  h: number;
  w: number;
}

interface N400225 {
  h: number;
  w: number;
}

interface Full225 {
  h: number;
  w: number;
}

interface N377 {
  sizes: Sizes226;
  uploaded_t: number;
  uploader: string;
}

interface Sizes226 {
  '100': N100227;
  '400': N400226;
  full: Full226;
}

interface N100227 {
  h: number;
  w: number;
}

interface N400226 {
  h: number;
  w: number;
}

interface Full226 {
  h: number;
  w: number;
}

interface N378 {
  sizes: Sizes227;
  uploaded_t: number;
  uploader: string;
}

interface Sizes227 {
  '100': N100228;
  '400': N400227;
  full: Full227;
}

interface N100228 {
  h: number;
  w: number;
}

interface N400227 {
  h: number;
  w: number;
}

interface Full227 {
  h: number;
  w: number;
}

interface N379 {
  sizes: Sizes228;
  uploaded_t: string;
  uploader: string;
}

interface Sizes228 {
  '100': N100229;
  '400': N400228;
  full: Full228;
}

interface N100229 {
  h: number;
  w: number;
}

interface N400228 {
  h: number;
  w: number;
}

interface Full228 {
  h: number;
  w: number;
}

interface N38 {
  sizes: Sizes229;
  uploaded_t: string;
  uploader: string;
}

interface Sizes229 {
  '100': N100230;
  '400': N400229;
  full: Full229;
}

interface N100230 {
  h: number;
  w: number;
}

interface N400229 {
  h: number;
  w: number;
}

interface Full229 {
  h: number;
  w: number;
}

interface N382 {
  sizes: Sizes230;
  uploaded_t: number;
  uploader: string;
}

interface Sizes230 {
  '100': N100231;
  '400': N400230;
  full: Full230;
}

interface N100231 {
  h: number;
  w: number;
}

interface N400230 {
  h: number;
  w: number;
}

interface Full230 {
  h: number;
  w: number;
}

interface N383 {
  sizes: Sizes231;
  uploaded_t: number;
  uploader: string;
}

interface Sizes231 {
  '100': N100232;
  '400': N400231;
  full: Full231;
}

interface N100232 {
  h: number;
  w: number;
}

interface N400231 {
  h: number;
  w: number;
}

interface Full231 {
  h: number;
  w: number;
}

interface N384 {
  sizes: Sizes232;
  uploaded_t: number;
  uploader: string;
}

interface Sizes232 {
  '100': N100233;
  '400': N400232;
  full: Full232;
}

interface N100233 {
  h: number;
  w: number;
}

interface N400232 {
  h: number;
  w: number;
}

interface Full232 {
  h: number;
  w: number;
}

interface N385 {
  sizes: Sizes233;
  uploaded_t: number;
  uploader: string;
}

interface Sizes233 {
  '100': N100234;
  '400': N400233;
  full: Full233;
}

interface N100234 {
  h: number;
  w: number;
}

interface N400233 {
  h: number;
  w: number;
}

interface Full233 {
  h: number;
  w: number;
}

interface N386 {
  sizes: Sizes234;
  uploaded_t: number;
  uploader: string;
}

interface Sizes234 {
  '100': N100235;
  '400': N400234;
  full: Full234;
}

interface N100235 {
  h: number;
  w: number;
}

interface N400234 {
  h: number;
  w: number;
}

interface Full234 {
  h: number;
  w: number;
}

interface N387 {
  sizes: Sizes235;
  uploaded_t: number;
  uploader: string;
}

interface Sizes235 {
  '100': N100236;
  '400': N400235;
  full: Full235;
}

interface N100236 {
  h: number;
  w: number;
}

interface N400235 {
  h: number;
  w: number;
}

interface Full235 {
  h: number;
  w: number;
}

interface N389 {
  sizes: Sizes236;
  uploaded_t: number;
  uploader: string;
}

interface Sizes236 {
  '100': N100237;
  '400': N400236;
  full: Full236;
}

interface N100237 {
  h: number;
  w: number;
}

interface N400236 {
  h: number;
  w: number;
}

interface Full236 {
  h: number;
  w: number;
}

interface N39 {
  sizes: Sizes237;
  uploaded_t: string;
  uploader: string;
}

interface Sizes237 {
  '100': N100238;
  '400': N400237;
  full: Full237;
}

interface N100238 {
  h: number;
  w: number;
}

interface N400237 {
  h: number;
  w: number;
}

interface Full237 {
  h: number;
  w: number;
}

interface N390 {
  sizes: Sizes238;
  uploaded_t: number;
  uploader: string;
}

interface Sizes238 {
  '100': N100239;
  '400': N400238;
  full: Full238;
}

interface N100239 {
  h: number;
  w: number;
}

interface N400238 {
  h: number;
  w: number;
}

interface Full238 {
  h: number;
  w: number;
}

interface N391 {
  sizes: Sizes239;
  uploaded_t: number;
  uploader: string;
}

interface Sizes239 {
  '100': N100240;
  '400': N400239;
  full: Full239;
}

interface N100240 {
  h: number;
  w: number;
}

interface N400239 {
  h: number;
  w: number;
}

interface Full239 {
  h: number;
  w: number;
}

interface N392 {
  sizes: Sizes240;
  uploaded_t: string;
  uploader: string;
}

interface Sizes240 {
  '100': N100241;
  '400': N400240;
  full: Full240;
}

interface N100241 {
  h: number;
  w: number;
}

interface N400240 {
  h: number;
  w: number;
}

interface Full240 {
  h: number;
  w: number;
}

interface N393 {
  sizes: Sizes241;
  uploaded_t: string;
  uploader: string;
}

interface Sizes241 {
  '100': N100242;
  '400': N400241;
  full: Full241;
}

interface N100242 {
  h: number;
  w: number;
}

interface N400241 {
  h: number;
  w: number;
}

interface Full241 {
  h: number;
  w: number;
}

interface N394 {
  sizes: Sizes242;
  uploaded_t: string;
  uploader: string;
}

interface Sizes242 {
  '100': N100243;
  '400': N400242;
  full: Full242;
}

interface N100243 {
  h: number;
  w: number;
}

interface N400242 {
  h: number;
  w: number;
}

interface Full242 {
  h: number;
  w: number;
}

interface N395 {
  sizes: Sizes243;
  uploaded_t: string;
  uploader: string;
}

interface Sizes243 {
  '100': N100244;
  '400': N400243;
  full: Full243;
}

interface N100244 {
  h: number;
  w: number;
}

interface N400243 {
  h: number;
  w: number;
}

interface Full243 {
  h: number;
  w: number;
}

interface N396 {
  sizes: Sizes244;
  uploaded_t: string;
  uploader: string;
}

interface Sizes244 {
  '100': N100245;
  '400': N400244;
  full: Full244;
}

interface N100245 {
  h: number;
  w: number;
}

interface N400244 {
  h: number;
  w: number;
}

interface Full244 {
  h: number;
  w: number;
}

interface N398 {
  sizes: Sizes245;
  uploaded_t: string;
  uploader: string;
}

interface Sizes245 {
  '100': N100246;
  '400': N400245;
  full: Full245;
}

interface N100246 {
  h: number;
  w: number;
}

interface N400245 {
  h: number;
  w: number;
}

interface Full245 {
  h: number;
  w: number;
}

interface N399 {
  sizes: Sizes246;
  uploaded_t: number;
  uploader: string;
}

interface Sizes246 {
  '100': N100247;
  '400': N400246;
  full: Full246;
}

interface N100247 {
  h: number;
  w: number;
}

interface N400246 {
  h: number;
  w: number;
}

interface Full246 {
  h: number;
  w: number;
}

interface N4 {
  sizes: Sizes247;
  uploaded_t: number;
  uploader: string;
}

interface Sizes247 {
  '100': N100248;
  '400': N400247;
  full: Full247;
}

interface N100248 {
  h: number;
  w: number;
}

interface N400247 {
  h: number;
  w: number;
}

interface Full247 {
  h: number;
  w: number;
}

interface N40 {
  sizes: Sizes248;
  uploaded_t: string;
  uploader: string;
}

interface Sizes248 {
  '100': N100249;
  '400': N400248;
  full: Full248;
}

interface N100249 {
  h: number;
  w: number;
}

interface N400248 {
  h: number;
  w: number;
}

interface Full248 {
  h: number;
  w: number;
}

interface N400249 {
  sizes: Sizes249;
  uploaded_t: number;
  uploader: string;
}

interface Sizes249 {
  '100': N100250;
  '400': N400250;
  full: Full249;
}

interface N100250 {
  h: number;
  w: number;
}

interface N400250 {
  h: number;
  w: number;
}

interface Full249 {
  h: number;
  w: number;
}

interface N401 {
  sizes: Sizes250;
  uploaded_t: number;
  uploader: string;
}

interface Sizes250 {
  '100': N100251;
  '400': N400251;
  full: Full250;
}

interface N100251 {
  h: number;
  w: number;
}

interface N400251 {
  h: number;
  w: number;
}

interface Full250 {
  h: number;
  w: number;
}

interface N402 {
  sizes: Sizes251;
  uploaded_t: number;
  uploader: string;
}

interface Sizes251 {
  '100': N100252;
  '400': N400252;
  full: Full251;
}

interface N100252 {
  h: number;
  w: number;
}

interface N400252 {
  h: number;
  w: number;
}

interface Full251 {
  h: number;
  w: number;
}

interface N404 {
  sizes: Sizes252;
  uploaded_t: number;
  uploader: string;
}

interface Sizes252 {
  '100': N100253;
  '400': N400253;
  full: Full252;
}

interface N100253 {
  h: number;
  w: number;
}

interface N400253 {
  h: number;
  w: number;
}

interface Full252 {
  h: number;
  w: number;
}

interface N406 {
  sizes: Sizes253;
  uploaded_t: number;
  uploader: string;
}

interface Sizes253 {
  '100': N100254;
  '400': N400254;
  full: Full253;
}

interface N100254 {
  h: number;
  w: number;
}

interface N400254 {
  h: number;
  w: number;
}

interface Full253 {
  h: number;
  w: number;
}

interface N407 {
  sizes: Sizes254;
  uploaded_t: number;
  uploader: string;
}

interface Sizes254 {
  '100': N100255;
  '400': N400255;
  full: Full254;
}

interface N100255 {
  h: number;
  w: number;
}

interface N400255 {
  h: number;
  w: number;
}

interface Full254 {
  h: number;
  w: number;
}

interface N408 {
  sizes: Sizes255;
  uploaded_t: number;
  uploader: string;
}

interface Sizes255 {
  '100': N100256;
  '400': N400256;
  full: Full255;
}

interface N100256 {
  h: number;
  w: number;
}

interface N400256 {
  h: number;
  w: number;
}

interface Full255 {
  h: number;
  w: number;
}

interface N409 {
  sizes: Sizes256;
  uploaded_t: number;
  uploader: string;
}

interface Sizes256 {
  '100': N100257;
  '400': N400257;
  full: Full256;
}

interface N100257 {
  h: number;
  w: number;
}

interface N400257 {
  h: number;
  w: number;
}

interface Full256 {
  h: number;
  w: number;
}

interface N410 {
  sizes: Sizes257;
  uploaded_t: string;
  uploader: string;
}

interface Sizes257 {
  '100': N100258;
  '400': N400258;
  full: Full257;
}

interface N100258 {
  h: number;
  w: number;
}

interface N400258 {
  h: number;
  w: number;
}

interface Full257 {
  h: number;
  w: number;
}

interface N411 {
  sizes: Sizes258;
  uploaded_t: number;
  uploader: string;
}

interface Sizes258 {
  '100': N100259;
  '400': N400259;
  full: Full258;
}

interface N100259 {
  h: number;
  w: number;
}

interface N400259 {
  h: number;
  w: number;
}

interface Full258 {
  h: number;
  w: number;
}

interface N412 {
  sizes: Sizes259;
  uploaded_t: number;
  uploader: string;
}

interface Sizes259 {
  '100': N100260;
  '400': N400260;
  full: Full259;
}

interface N100260 {
  h: number;
  w: number;
}

interface N400260 {
  h: number;
  w: number;
}

interface Full259 {
  h: number;
  w: number;
}

interface N43 {
  sizes: Sizes260;
  uploaded_t: string;
  uploader: string;
}

interface Sizes260 {
  '100': N100261;
  '400': N400261;
  full: Full260;
}

interface N100261 {
  h: number;
  w: number;
}

interface N400261 {
  h: number;
  w: number;
}

interface Full260 {
  h: number;
  w: number;
}

interface N44 {
  sizes: Sizes261;
  uploaded_t: string;
  uploader: string;
}

interface Sizes261 {
  '100': N100262;
  '400': N400262;
  full: Full261;
}

interface N100262 {
  h: number;
  w: number;
}

interface N400262 {
  h: number;
  w: number;
}

interface Full261 {
  h: number;
  w: number;
}

interface N47 {
  sizes: Sizes262;
  uploaded_t: string;
  uploader: string;
}

interface Sizes262 {
  '100': N100263;
  '400': N400263;
  full: Full262;
}

interface N100263 {
  h: number;
  w: number;
}

interface N400263 {
  h: number;
  w: number;
}

interface Full262 {
  h: number;
  w: number;
}

interface N48 {
  sizes: Sizes263;
  uploaded_t: string;
  uploader: string;
}

interface Sizes263 {
  '100': N100264;
  '400': N400264;
  full: Full263;
}

interface N100264 {
  h: number;
  w: number;
}

interface N400264 {
  h: number;
  w: number;
}

interface Full263 {
  h: number;
  w: number;
}

interface N5 {
  sizes: Sizes264;
  uploaded_t: number;
  uploader: string;
}

interface Sizes264 {
  '100': N100265;
  '400': N400265;
  full: Full264;
}

interface N100265 {
  h: number;
  w: number;
}

interface N400265 {
  h: number;
  w: number;
}

interface Full264 {
  h: number;
  w: number;
}

interface N50 {
  sizes: Sizes265;
  uploaded_t: string;
  uploader: string;
}

interface Sizes265 {
  '100': N100266;
  '400': N400266;
  full: Full265;
}

interface N100266 {
  h: number;
  w: number;
}

interface N400266 {
  h: number;
  w: number;
}

interface Full265 {
  h: number;
  w: number;
}

interface N52 {
  sizes: Sizes266;
  uploaded_t: string;
  uploader: string;
}

interface Sizes266 {
  '100': N100267;
  '400': N400267;
  full: Full266;
}

interface N100267 {
  h: number;
  w: number;
}

interface N400267 {
  h: number;
  w: number;
}

interface Full266 {
  h: number;
  w: number;
}

interface N54 {
  sizes: Sizes267;
  uploaded_t: string;
  uploader: string;
}

interface Sizes267 {
  '100': N100268;
  '400': N400268;
  full: Full267;
}

interface N100268 {
  h: number;
  w: number;
}

interface N400268 {
  h: number;
  w: number;
}

interface Full267 {
  h: number;
  w: number;
}

interface N55 {
  sizes: Sizes268;
  uploaded_t: string;
  uploader: string;
}

interface Sizes268 {
  '100': N100269;
  '400': N400269;
  full: Full268;
}

interface N100269 {
  h: number;
  w: number;
}

interface N400269 {
  h: number;
  w: number;
}

interface Full268 {
  h: number;
  w: number;
}

interface N56 {
  sizes: Sizes269;
  uploaded_t: string;
  uploader: string;
}

interface Sizes269 {
  '100': N100270;
  '400': N400270;
  full: Full269;
}

interface N100270 {
  h: number;
  w: number;
}

interface N400270 {
  h: number;
  w: number;
}

interface Full269 {
  h: number;
  w: number;
}

interface N57 {
  sizes: Sizes270;
  uploaded_t: string;
  uploader: string;
}

interface Sizes270 {
  '100': N100271;
  '400': N400271;
  full: Full270;
}

interface N100271 {
  h: number;
  w: number;
}

interface N400271 {
  h: number;
  w: number;
}

interface Full270 {
  h: number;
  w: number;
}

interface N59 {
  sizes: Sizes271;
  uploaded_t: string;
  uploader: string;
}

interface Sizes271 {
  '100': N100272;
  '400': N400272;
  full: Full271;
}

interface N100272 {
  h: number;
  w: number;
}

interface N400272 {
  h: number;
  w: number;
}

interface Full271 {
  h: number;
  w: number;
}

interface N6 {
  sizes: Sizes272;
  uploaded_t: number;
  uploader: string;
}

interface Sizes272 {
  '100': N100273;
  '400': N400273;
  full: Full272;
}

interface N100273 {
  h: number;
  w: number;
}

interface N400273 {
  h: number;
  w: number;
}

interface Full272 {
  h: number;
  w: number;
}

interface N60 {
  sizes: Sizes273;
  uploaded_t: string;
  uploader: string;
}

interface Sizes273 {
  '100': N100274;
  '400': N400274;
  full: Full273;
}

interface N100274 {
  h: number;
  w: number;
}

interface N400274 {
  h: number;
  w: number;
}

interface Full273 {
  h: number;
  w: number;
}

interface N61 {
  sizes: Sizes274;
  uploaded_t: string;
  uploader: string;
}

interface Sizes274 {
  '100': N100275;
  '400': N400275;
  full: Full274;
}

interface N100275 {
  h: number;
  w: number;
}

interface N400275 {
  h: number;
  w: number;
}

interface Full274 {
  h: number;
  w: number;
}

interface N62 {
  sizes: Sizes275;
  uploaded_t: string;
  uploader: string;
}

interface Sizes275 {
  '100': N100276;
  '400': N400276;
  full: Full275;
}

interface N100276 {
  h: number;
  w: number;
}

interface N400276 {
  h: number;
  w: number;
}

interface Full275 {
  h: number;
  w: number;
}

interface N63 {
  sizes: Sizes276;
  uploaded_t: string;
  uploader: string;
}

interface Sizes276 {
  '100': N100277;
  '400': N400277;
  full: Full276;
}

interface N100277 {
  h: number;
  w: number;
}

interface N400277 {
  h: number;
  w: number;
}

interface Full276 {
  h: number;
  w: number;
}

interface N64 {
  sizes: Sizes277;
  uploaded_t: string;
  uploader: string;
}

interface Sizes277 {
  '100': N100278;
  '400': N400278;
  full: Full277;
}

interface N100278 {
  h: number;
  w: number;
}

interface N400278 {
  h: number;
  w: number;
}

interface Full277 {
  h: number;
  w: number;
}

interface N65 {
  sizes: Sizes278;
  uploaded_t: string;
  uploader: string;
}

interface Sizes278 {
  '100': N100279;
  '400': N400279;
  full: Full278;
}

interface N100279 {
  h: number;
  w: number;
}

interface N400279 {
  h: number;
  w: number;
}

interface Full278 {
  h: number;
  w: number;
}

interface N66 {
  sizes: Sizes279;
  uploaded_t: string;
  uploader: string;
}

interface Sizes279 {
  '100': N100280;
  '400': N400280;
  full: Full279;
}

interface N100280 {
  h: number;
  w: number;
}

interface N400280 {
  h: number;
  w: number;
}

interface Full279 {
  h: number;
  w: number;
}

interface N69 {
  sizes: Sizes280;
  uploaded_t: string;
  uploader: string;
}

interface Sizes280 {
  '100': N100281;
  '400': N400281;
  full: Full280;
}

interface N100281 {
  h: number;
  w: number;
}

interface N400281 {
  h: number;
  w: number;
}

interface Full280 {
  h: number;
  w: number;
}

interface N7 {
  sizes: Sizes281;
  uploaded_t: number;
  uploader: string;
}

interface Sizes281 {
  '100': N100282;
  '400': N400282;
  full: Full281;
}

interface N100282 {
  h: number;
  w: number;
}

interface N400282 {
  h: number;
  w: number;
}

interface Full281 {
  h: number;
  w: number;
}

interface N70 {
  sizes: Sizes282;
  uploaded_t: string;
  uploader: string;
}

interface Sizes282 {
  '100': N100283;
  '400': N400283;
  full: Full282;
}

interface N100283 {
  h: number;
  w: number;
}

interface N400283 {
  h: number;
  w: number;
}

interface Full282 {
  h: number;
  w: number;
}

interface N71 {
  sizes: Sizes283;
  uploaded_t: string;
  uploader: string;
}

interface Sizes283 {
  '100': N100284;
  '400': N400284;
  full: Full283;
}

interface N100284 {
  h: number;
  w: number;
}

interface N400284 {
  h: number;
  w: number;
}

interface Full283 {
  h: number;
  w: number;
}

interface N72 {
  sizes: Sizes284;
  uploaded_t: string;
  uploader: string;
}

interface Sizes284 {
  '100': N100285;
  '400': N400285;
  full: Full284;
}

interface N100285 {
  h: number;
  w: number;
}

interface N400285 {
  h: number;
  w: number;
}

interface Full284 {
  h: number;
  w: number;
}

interface N73 {
  sizes: Sizes285;
  uploaded_t: string;
  uploader: string;
}

interface Sizes285 {
  '100': N100286;
  '400': N400286;
  full: Full285;
}

interface N100286 {
  h: number;
  w: number;
}

interface N400286 {
  h: number;
  w: number;
}

interface Full285 {
  h: number;
  w: number;
}

interface N74 {
  sizes: Sizes286;
  uploaded_t: string;
  uploader: string;
}

interface Sizes286 {
  '100': N100287;
  '400': N400287;
  full: Full286;
}

interface N100287 {
  h: number;
  w: number;
}

interface N400287 {
  h: number;
  w: number;
}

interface Full286 {
  h: number;
  w: number;
}

interface N76 {
  sizes: Sizes287;
  uploaded_t: string;
  uploader: string;
}

interface Sizes287 {
  '100': N100288;
  '400': N400288;
  full: Full287;
}

interface N100288 {
  h: number;
  w: number;
}

interface N400288 {
  h: number;
  w: number;
}

interface Full287 {
  h: number;
  w: number;
}

interface N77 {
  sizes: Sizes288;
  uploaded_t: string;
  uploader: string;
}

interface Sizes288 {
  '100': N100289;
  '400': N400289;
  full: Full288;
}

interface N100289 {
  h: number;
  w: number;
}

interface N400289 {
  h: number;
  w: number;
}

interface Full288 {
  h: number;
  w: number;
}

interface N78 {
  sizes: Sizes289;
  uploaded_t: string;
  uploader: string;
}

interface Sizes289 {
  '100': N100290;
  '400': N400290;
  full: Full289;
}

interface N100290 {
  h: number;
  w: number;
}

interface N400290 {
  h: number;
  w: number;
}

interface Full289 {
  h: number;
  w: number;
}

interface N79 {
  sizes: Sizes290;
  uploaded_t: string;
  uploader: string;
}

interface Sizes290 {
  '100': N100291;
  '400': N400291;
  full: Full290;
}

interface N100291 {
  h: number;
  w: number;
}

interface N400291 {
  h: number;
  w: number;
}

interface Full290 {
  h: number;
  w: number;
}

interface N8 {
  sizes: Sizes291;
  uploaded_t: number;
  uploader: string;
}

interface Sizes291 {
  '100': N100292;
  '400': N400292;
  full: Full291;
}

interface N100292 {
  h: number;
  w: number;
}

interface N400292 {
  h: number;
  w: number;
}

interface Full291 {
  h: number;
  w: number;
}

interface N80 {
  sizes: Sizes292;
  uploaded_t: string;
  uploader: string;
}

interface Sizes292 {
  '100': N100293;
  '400': N400293;
  full: Full292;
}

interface N100293 {
  h: number;
  w: number;
}

interface N400293 {
  h: number;
  w: number;
}

interface Full292 {
  h: number;
  w: number;
}

interface N81 {
  sizes: Sizes293;
  uploaded_t: string;
  uploader: string;
}

interface Sizes293 {
  '100': N100294;
  '400': N400294;
  full: Full293;
}

interface N100294 {
  h: number;
  w: number;
}

interface N400294 {
  h: number;
  w: number;
}

interface Full293 {
  h: number;
  w: number;
}

interface N82 {
  sizes: Sizes294;
  uploaded_t: string;
  uploader: string;
}

interface Sizes294 {
  '100': N100295;
  '400': N400295;
  full: Full294;
}

interface N100295 {
  h: number;
  w: number;
}

interface N400295 {
  h: number;
  w: number;
}

interface Full294 {
  h: number;
  w: number;
}

interface N83 {
  sizes: Sizes295;
  uploaded_t: string;
  uploader: string;
}

interface Sizes295 {
  '100': N100296;
  '400': N400296;
  full: Full295;
}

interface N100296 {
  h: number;
  w: number;
}

interface N400296 {
  h: number;
  w: number;
}

interface Full295 {
  h: number;
  w: number;
}

interface N84 {
  sizes: Sizes296;
  uploaded_t: string;
  uploader: string;
}

interface Sizes296 {
  '100': N100297;
  '400': N400297;
  full: Full296;
}

interface N100297 {
  h: number;
  w: number;
}

interface N400297 {
  h: number;
  w: number;
}

interface Full296 {
  h: number;
  w: number;
}

interface N85 {
  sizes: Sizes297;
  uploaded_t: string;
  uploader: string;
}

interface Sizes297 {
  '100': N100298;
  '400': N400298;
  full: Full297;
}

interface N100298 {
  h: number;
  w: number;
}

interface N400298 {
  h: number;
  w: number;
}

interface Full297 {
  h: number;
  w: number;
}

interface N88 {
  sizes: Sizes298;
  uploaded_t: string;
  uploader: string;
}

interface Sizes298 {
  '100': N100299;
  '400': N400299;
  full: Full298;
}

interface N100299 {
  h: number;
  w: number;
}

interface N400299 {
  h: number;
  w: number;
}

interface Full298 {
  h: number;
  w: number;
}

interface N89 {
  sizes: Sizes299;
  uploaded_t: string;
  uploader: string;
}

interface Sizes299 {
  '100': N100300;
  '400': N400300;
  full: Full299;
}

interface N100300 {
  h: number;
  w: number;
}

interface N400300 {
  h: number;
  w: number;
}

interface Full299 {
  h: number;
  w: number;
}

interface N9 {
  sizes: Sizes300;
  uploaded_t: number;
  uploader: string;
}

interface Sizes300 {
  '100': N100301;
  '400': N400301;
  full: Full300;
}

interface N100301 {
  h: number;
  w: number;
}

interface N400301 {
  h: number;
  w: number;
}

interface Full300 {
  h: number;
  w: number;
}

interface N90 {
  sizes: Sizes301;
  uploaded_t: string;
  uploader: string;
}

interface Sizes301 {
  '100': N100302;
  '400': N400302;
  full: Full301;
}

interface N100302 {
  h: number;
  w: number;
}

interface N400302 {
  h: number;
  w: number;
}

interface Full301 {
  h: number;
  w: number;
}

interface N91 {
  sizes: Sizes302;
  uploaded_t: string;
  uploader: string;
}

interface Sizes302 {
  '100': N100303;
  '400': N400303;
  full: Full302;
}

interface N100303 {
  h: number;
  w: number;
}

interface N400303 {
  h: number;
  w: number;
}

interface Full302 {
  h: number;
  w: number;
}

interface N92 {
  sizes: Sizes303;
  uploaded_t: string;
  uploader: string;
}

interface Sizes303 {
  '100': N100304;
  '400': N400304;
  full: Full303;
}

interface N100304 {
  h: number;
  w: number;
}

interface N400304 {
  h: number;
  w: number;
}

interface Full303 {
  h: number;
  w: number;
}

interface N93 {
  sizes: Sizes304;
  uploaded_t: string;
  uploader: string;
}

interface Sizes304 {
  '100': N100305;
  '400': N400305;
  full: Full304;
}

interface N100305 {
  h: number;
  w: number;
}

interface N400305 {
  h: number;
  w: number;
}

interface Full304 {
  h: number;
  w: number;
}

interface N94 {
  sizes: Sizes305;
  uploaded_t: string;
  uploader: string;
}

interface Sizes305 {
  '100': N100306;
  '400': N400306;
  full: Full305;
}

interface N100306 {
  h: number;
  w: number;
}

interface N400306 {
  h: number;
  w: number;
}

interface Full305 {
  h: number;
  w: number;
}

interface N95 {
  sizes: Sizes306;
  uploaded_t: string;
  uploader: string;
}

interface Sizes306 {
  '100': N100307;
  '400': N400307;
  full: Full306;
}

interface N100307 {
  h: number;
  w: number;
}

interface N400307 {
  h: number;
  w: number;
}

interface Full306 {
  h: number;
  w: number;
}

interface N97 {
  sizes: Sizes307;
  uploaded_t: string;
  uploader: string;
}

interface Sizes307 {
  '100': N100308;
  '400': N400308;
  full: Full307;
}

interface N100308 {
  h: number;
  w: number;
}

interface N400308 {
  h: number;
  w: number;
}

interface Full307 {
  h: number;
  w: number;
}

interface N98 {
  sizes: Sizes308;
  uploaded_t: string;
  uploader: string;
}

interface Sizes308 {
  '100': N100309;
  '400': N400309;
  full: Full308;
}

interface N100309 {
  h: number;
  w: number;
}

interface N400309 {
  h: number;
  w: number;
}

interface Full308 {
  h: number;
  w: number;
}

interface N99 {
  sizes: Sizes309;
  uploaded_t: string;
  uploader: string;
}

interface Sizes309 {
  '100': N100310;
  '400': N400310;
  full: Full309;
}

interface N100310 {
  h: number;
  w: number;
}

interface N400310 {
  h: number;
  w: number;
}

interface Full309 {
  h: number;
  w: number;
}

interface FrontAr {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes310;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes310 {
  '100': N100311;
  '200': N2002;
  '400': N400311;
  full: Full310;
}

interface N100311 {
  h: number;
  w: number;
}

interface N2002 {
  h: number;
  w: number;
}

interface N400311 {
  h: number;
  w: number;
}

interface Full310 {
  h: number;
  w: number;
}

interface FrontDe {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes311;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes311 {
  '100': N100312;
  '200': N2003;
  '400': N400312;
  full: Full311;
}

interface N100312 {
  h: number;
  w: number;
}

interface N2003 {
  h: number;
  w: number;
}

interface N400312 {
  h: number;
  w: number;
}

interface Full311 {
  h: number;
  w: number;
}

interface FrontEn {
  angle: string;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: string;
  rev: string;
  sizes: Sizes312;
  white_magic: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes312 {
  '100': N100313;
  '200': N2004;
  '400': N400313;
  full: Full312;
}

interface N100313 {
  h: number;
  w: number;
}

interface N2004 {
  h: number;
  w: number;
}

interface N400313 {
  h: number;
  w: number;
}

interface Full312 {
  h: number;
  w: number;
}

interface FrontFr {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: string;
  rev: string;
  sizes: Sizes313;
  white_magic: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes313 {
  '100': N100314;
  '200': N2005;
  '400': N400314;
  full: Full313;
}

interface N100314 {
  h: number;
  w: number;
}

interface N2005 {
  h: number;
  w: number;
}

interface N400314 {
  h: number;
  w: number;
}

interface Full313 {
  h: number;
  w: number;
}

interface FrontIt {
  angle: string;
  geometry: string;
  imgid: string;
  normalize: string;
  rev: string;
  sizes: Sizes314;
  white_magic: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes314 {
  '100': N100315;
  '200': N2006;
  '400': N400315;
  full: Full314;
}

interface N100315 {
  h: number;
  w: number;
}

interface N2006 {
  h: number;
  w: number;
}

interface N400315 {
  h: number;
  w: number;
}

interface Full314 {
  h: number;
  w: number;
}

interface FrontNl {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes315;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes315 {
  '100': N100316;
  '200': N2007;
  '400': N400316;
  full: Full315;
}

interface N100316 {
  h: number;
  w: number;
}

interface N2007 {
  h: number;
  w: number;
}

interface N400316 {
  h: number;
  w: number;
}

interface Full315 {
  h: number;
  w: number;
}

interface FrontRo {
  angle: string;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: string;
  rev: string;
  sizes: Sizes316;
  white_magic: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes316 {
  '100': N100317;
  '200': N2008;
  '400': N400317;
  full: Full316;
}

interface N100317 {
  h: number;
  w: number;
}

interface N2008 {
  h: number;
  w: number;
}

interface N400317 {
  h: number;
  w: number;
}

interface Full316 {
  h: number;
  w: number;
}

interface IngredientsEn {
  angle: any;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes317;
  white_magic: any;
  x1: any;
  x2: any;
  y1: any;
  y2: any;
}

interface Sizes317 {
  '100': N100318;
  '200': N2009;
  '400': N400318;
  full: Full317;
}

interface N100318 {
  h: number;
  w: number;
}

interface N2009 {
  h: number;
  w: number;
}

interface N400318 {
  h: number;
  w: number;
}

interface Full317 {
  h: number;
  w: number;
}

interface IngredientsFr {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes318;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes318 {
  '100': N100319;
  '200': N20010;
  '400': N400319;
  full: Full318;
}

interface N100319 {
  h: number;
  w: number;
}

interface N20010 {
  h: number;
  w: number;
}

interface N400319 {
  h: number;
  w: number;
}

interface Full318 {
  h: number;
  w: number;
}

interface NutritionEn {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes319;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes319 {
  '100': N100320;
  '200': N20011;
  '400': N400320;
  full: Full319;
}

interface N100320 {
  h: number;
  w: number;
}

interface N20011 {
  h: number;
  w: number;
}

interface N400320 {
  h: number;
  w: number;
}

interface Full319 {
  h: number;
  w: number;
}

interface NutritionFr {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes320;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes320 {
  '100': N100321;
  '200': N20012;
  '400': N400321;
  full: Full320;
}

interface N100321 {
  h: number;
  w: number;
}

interface N20012 {
  h: number;
  w: number;
}

interface N400321 {
  h: number;
  w: number;
}

interface Full320 {
  h: number;
  w: number;
}

interface NutritionIt {
  angle: string;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: string;
  rev: string;
  sizes: Sizes321;
  white_magic: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes321 {
  '100': N100322;
  '200': N20013;
  '400': N400322;
  full: Full321;
}

interface N100322 {
  h: number;
  w: number;
}

interface N20013 {
  h: number;
  w: number;
}

interface N400322 {
  h: number;
  w: number;
}

interface Full321 {
  h: number;
  w: number;
}

interface NutritionNl {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes322;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes322 {
  '100': N100323;
  '200': N20014;
  '400': N400323;
  full: Full322;
}

interface N100323 {
  h: number;
  w: number;
}

interface N20014 {
  h: number;
  w: number;
}

interface N400323 {
  h: number;
  w: number;
}

interface Full322 {
  h: number;
  w: number;
}

interface NutritionRo {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes323;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes323 {
  '100': N100324;
  '200': N20015;
  '400': N400324;
  full: Full323;
}

interface N100324 {
  h: number;
  w: number;
}

interface N20015 {
  h: number;
  w: number;
}

interface N400324 {
  h: number;
  w: number;
}

interface Full323 {
  h: number;
  w: number;
}

interface OtherFr {
  angle: string;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes324;
  white_magic: any;
  x1: any;
  x2: any;
  y1: any;
  y2: any;
}

interface Sizes324 {
  '100': N100325;
  '200': N20016;
  '400': N400325;
  full: Full324;
}

interface N100325 {
  h: number;
  w: number;
}

interface N20016 {
  h: number;
  w: number;
}

interface N400325 {
  h: number;
  w: number;
}

interface Full324 {
  h: number;
  w: number;
}

interface PackagingEn {
  angle: string;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: string;
  rev: string;
  sizes: Sizes325;
  white_magic: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes325 {
  '100': N100326;
  '200': N20017;
  '400': N400326;
  full: Full325;
}

interface N100326 {
  h: number;
  w: number;
}

interface N20017 {
  h: number;
  w: number;
}

interface N400326 {
  h: number;
  w: number;
}

interface Full325 {
  h: number;
  w: number;
}

interface PackagingFr {
  angle: number;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes326;
  white_magic: any;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

interface Sizes326 {
  '100': N100327;
  '200': N20018;
  '400': N400327;
  full: Full326;
}

interface N100327 {
  h: number;
  w: number;
}

interface N20018 {
  h: number;
  w: number;
}

interface N400327 {
  h: number;
  w: number;
}

interface Full326 {
  h: number;
  w: number;
}

interface PackagingNl {
  angle: string;
  coordinates_image_size: string;
  geometry: string;
  imgid: string;
  normalize: any;
  rev: string;
  sizes: Sizes327;
  white_magic: any;
  x1: any;
  x2: any;
  y1: any;
  y2: any;
}

interface Sizes327 {
  '100': N100328;
  '200': N20019;
  '400': N400328;
  full: Full327;
}

interface N100328 {
  h: number;
  w: number;
}

interface N20019 {
  h: number;
  w: number;
}

interface N400328 {
  h: number;
  w: number;
}

interface Full327 {
  h: number;
  w: number;
}

interface Ingredient {
  ciqual_food_code: string;
  ecobalyse_code: string;
  id: string;
  is_in_taxonomy: number;
  percent_estimate: number;
  percent_max: number;
  percent_min: number;
  text: string;
  vegan: string;
  vegetarian: string;
}

type IngredientsAnalysis = unknown;

interface Languages {
  'en:arabic': number;
  'en:dutch': number;
  'en:english': number;
  'en:french': number;
  'en:german': number;
  'en:italian': number;
  'en:romanian': number;
}

interface LanguagesCodes {
  ar: number;
  de: number;
  en: number;
  fr: number;
  it: number;
  nl: number;
  ro: number;
}

type NovaGroupsMarkers = unknown;

interface NutrientLevels {
  fat: string;
  salt: string;
  'saturated-fat': string;
  sugars: string;
}

interface Nutriments {
  'alpha-linolenic-acid': number;
  'alpha-linolenic-acid_100g': number;
  'alpha-linolenic-acid_serving': number;
  'alpha-linolenic-acid_unit': string;
  'alpha-linolenic-acid_value': number;
  'arachidic-acid': number;
  'arachidic-acid_100g': number;
  'arachidic-acid_serving': number;
  'arachidic-acid_unit': string;
  'arachidic-acid_value': number;
  'arachidonic-acid': number;
  'arachidonic-acid_100g': number;
  'arachidonic-acid_serving': number;
  'arachidonic-acid_unit': string;
  'arachidonic-acid_value': number;
  'behenic-acid': number;
  'behenic-acid_100g': number;
  'behenic-acid_serving': number;
  'behenic-acid_unit': string;
  'behenic-acid_value': number;
  bicarbonate: number;
  bicarbonate_100g: number;
  bicarbonate_label: string;
  bicarbonate_serving: number;
  bicarbonate_unit: string;
  bicarbonate_value: number;
  biotin: number;
  biotin_100g: number;
  biotin_serving: number;
  biotin_unit: string;
  biotin_value: number;
  'butyric-acid': number;
  'butyric-acid_100g': number;
  'butyric-acid_serving': number;
  'butyric-acid_unit': string;
  'butyric-acid_value': number;
  calcium: number;
  calcium_100g: number;
  calcium_label: string;
  calcium_serving: number;
  calcium_unit: string;
  calcium_value: number;
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  'carbon-footprint-from-known-ingredients_product': number;
  chloride: number;
  chloride_100g: number;
  chloride_label: string;
  chloride_serving: number;
  chloride_unit: string;
  chloride_value: number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_serving': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  'energy-kcal_value_computed': number;
  'energy-kj': number;
  'energy-kj_100g': number;
  'energy-kj_serving': number;
  'energy-kj_unit': string;
  'energy-kj_value': number;
  'energy-kj_value_computed': number;
  energy_100g: number;
  energy_serving: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_serving: number;
  fat_unit: string;
  fat_value: number;
  fiber: number;
  fiber_100g: number;
  fiber_serving: number;
  fiber_unit: string;
  fiber_value: number;
  fluoride: number;
  fluoride_100g: number;
  fluoride_label: string;
  fluoride_serving: number;
  fluoride_unit: string;
  fluoride_value: number;
  'fruits-vegetables-legumes-estimate-from-ingredients_100g': number;
  'fruits-vegetables-legumes-estimate-from-ingredients_serving': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_serving': number;
  magnesium: number;
  magnesium_100g: number;
  magnesium_label: string;
  magnesium_serving: number;
  magnesium_unit: string;
  magnesium_value: number;
  nitrate: number;
  nitrate_100g: number;
  nitrate_label: string;
  nitrate_modifier: string;
  nitrate_serving: number;
  nitrate_unit: string;
  nitrate_value: number;
  'nova-group': number;
  'nova-group_100g': number;
  'nova-group_serving': number;
  'nutrition-score-fr': number;
  'nutrition-score-fr_100g': number;
  potassium: number;
  potassium_100g: number;
  potassium_label: string;
  potassium_serving: number;
  potassium_unit: string;
  potassium_value: number;
  proteins: number;
  proteins_100g: number;
  proteins_serving: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_serving: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_serving': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  silica: number;
  silica_100g: number;
  silica_label: string;
  silica_serving: number;
  silica_unit: string;
  silica_value: number;
  sodium: number;
  sodium_100g: number;
  sodium_serving: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_serving: number;
  sugars_unit: string;
  sugars_value: number;
  sulphate: number;
  sulphate_100g: number;
  sulphate_label: string;
  sulphate_serving: number;
  sulphate_unit: string;
  sulphate_value: number;
}

interface NutrimentsEstimated {
  alcohol_100g: number;
  'beta-carotene_100g': number;
  calcium_100g: number;
  carbohydrates_100g: number;
  cholesterol_100g: number;
  copper_100g: number;
  'energy-kcal_100g': number;
  'energy-kj_100g': number;
  energy_100g: number;
  fat_100g: number;
  fiber_100g: number;
  fructose_100g: number;
  galactose_100g: number;
  glucose_100g: number;
  iodine_100g: number;
  iron_100g: number;
  lactose_100g: number;
  magnesium_100g: number;
  maltose_100g: number;
  manganese_100g: number;
  'pantothenic-acid_100g': number;
  phosphorus_100g: number;
  phylloquinone_100g: number;
  polyols_100g: number;
  potassium_100g: number;
  proteins_100g: number;
  salt_100g: number;
  'saturated-fat_100g': number;
  selenium_100g: number;
  sodium_100g: number;
  starch_100g: number;
  sucrose_100g: number;
  sugars_100g: number;
  'vitamin-a_100g': number;
  'vitamin-b12_100g': number;
  'vitamin-b1_100g': number;
  'vitamin-b2_100g': number;
  'vitamin-b6_100g': number;
  'vitamin-b9_100g': number;
  'vitamin-c_100g': number;
  'vitamin-d_100g': number;
  'vitamin-e_100g': number;
  'vitamin-pp_100g': number;
  water_100g: number;
  zinc_100g: number;
}

interface Nutriscore {
  '2021': N2021;
  '2023': N2023;
}

interface N2021 {
  category_available: number;
  data: Data;
  grade: string;
  nutrients_available: number;
  nutriscore_applicable: number;
  nutriscore_computed: number;
  score: number;
}

interface Data {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: string;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_value: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
}

interface N2023 {
  category_available: number;
  data: Data2;
  grade: string;
  nutrients_available: number;
  nutriscore_applicable: number;
  nutriscore_computed: number;
  score: number;
}

interface Data2 {
  components: Components;
  count_proteins: number;
  count_proteins_reason: string;
  is_beverage: number;
  is_cheese: number;
  is_fat_oil_nuts_seeds: number;
  is_red_meat_product: number;
  is_water: string;
  negative_points: number;
  negative_points_max: number;
  positive_nutrients: string[];
  positive_points: number;
  positive_points_max: number;
}

interface Components {
  negative: Negative[];
  positive: Positive[];
}

interface Negative {
  id: string;
  points: number;
  points_max: number;
  unit: string;
  value: number;
}

interface Positive {
  id: string;
  points: number;
  points_max: number;
  unit: string;
  value: number;
}

interface NutriscoreData {
  components: Components2;
  count_proteins: number;
  count_proteins_reason: string;
  grade: string;
  is_beverage: number;
  is_cheese: number;
  is_fat_oil_nuts_seeds: number;
  is_red_meat_product: number;
  is_water: string;
  negative_points: number;
  negative_points_max: number;
  positive_nutrients: string[];
  positive_points: number;
  positive_points_max: number;
  score: number;
}

interface Components2 {
  negative: Negative2[];
  positive: Positive2[];
}

interface Negative2 {
  id: string;
  points: number;
  points_max: number;
  unit: string;
  value: number;
}

interface Positive2 {
  id: string;
  points: number;
  points_max: number;
  unit: string;
  value: number;
}

interface OwnerFields {
  abbreviated_product_name_fr: number;
  brands: number;
  categories: number;
  conservation_conditions_fr: number;
  countries: number;
  customer_service_fr: number;
  data_sources: number;
  generic_name_fr: number;
  ingredients_text_fr: number;
  lang: number;
  lc: number;
  nutrition_data_per: number;
  nutrition_data_prepared_per: number;
  obsolete: number;
  origin_fr: number;
  owner: number;
  product_name_fr: number;
  quantity: number;
}

interface Packaging3 {
  food_contact: number;
  material?: string;
  number_of_units: number;
  quantity_per_unit?: string;
  quantity_per_unit_unit?: string;
  quantity_per_unit_value?: number;
  recycling?: string;
  shape: string;
  weight_measured: number;
}

interface PackagingsMaterials {
  all: All;
  'en:plastic': EnPlastic;
  'en:unknown': EnUnknown;
}

interface All {
  weight: number;
  weight_100g: number;
  weight_percent: number;
}

interface EnPlastic {
  weight: number;
  weight_100g: number;
  weight_percent: number;
}

interface EnUnknown {
  weight: number;
  weight_100g: number;
  weight_percent: number;
}

interface SelectedImages {
  front: Front;
  ingredients: Ingredients;
  nutrition: Nutrition;
  packaging: Packaging4;
}

interface Front {
  display: Display;
  small: Small;
  thumb: Thumb;
}

interface Display {
  ar: string;
  de: string;
  en: string;
  fr: string;
  it: string;
  nl: string;
  ro: string;
}

interface Small {
  ar: string;
  de: string;
  en: string;
  fr: string;
  it: string;
  nl: string;
  ro: string;
}

interface Thumb {
  ar: string;
  de: string;
  en: string;
  fr: string;
  it: string;
  nl: string;
  ro: string;
}

interface Ingredients {
  display: Display2;
  small: Small2;
  thumb: Thumb2;
}

interface Display2 {
  en: string;
  fr: string;
}

interface Small2 {
  en: string;
  fr: string;
}

interface Thumb2 {
  en: string;
  fr: string;
}

interface Nutrition {
  display: Display3;
  small: Small3;
  thumb: Thumb3;
}

interface Display3 {
  en: string;
  fr: string;
  it: string;
  nl: string;
  ro: string;
}

interface Small3 {
  en: string;
  fr: string;
  it: string;
  nl: string;
  ro: string;
}

interface Thumb3 {
  en: string;
  fr: string;
  it: string;
  nl: string;
  ro: string;
}

interface Packaging4 {
  display: Display4;
  small: Small4;
  thumb: Thumb4;
}

interface Display4 {
  en: string;
  fr: string;
  nl: string;
}

interface Small4 {
  en: string;
  fr: string;
  nl: string;
}

interface Thumb4 {
  en: string;
  fr: string;
  nl: string;
}

interface Source {
  fields: string[];
  id: string;
  images: any[];
  import_t: number;
  manufacturer: any;
  name: string;
  source_licence?: string;
  source_licence_url?: string;
  url?: string;
}

interface SourcesFields {
  'org-gs1': OrgGs1;
}

interface OrgGs1 {
  gln: string;
  gpcCategoryCode: string;
  gpcCategoryName: string;
  isAllergenRelevantDataProvided: string;
  lastChangeDateTime: string;
  partyName: string;
  publicationDateTime: string;
}
