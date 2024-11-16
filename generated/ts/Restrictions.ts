export type Restrictions = {
  GlobalRestrictions: {
    restrictedBool: {
      'ANY restriction name': {
        value: boolean;
      } | undefined;
    } | undefined;
    restrictedValue: {
      'ANY restriction name': {
        value: number;
      } | undefined;
    } | undefined;
    intersection: {
      'ANY restriction name': {
        values: Array<string>;
      } | undefined;
    } | undefined;
    union: {
      'ANY restriction name': {
        values: Array<string>;
      } | undefined;
    } | undefined;
  };
  ProfileRestrictions: {
    'ANY profile identifier': {
      restrictedBool: {
        'ANY restriction name': {
          value: boolean;
        } | undefined;
      } | undefined;
      restrictedValue: {
        'ANY restriction name': {
          value: number;
        } | undefined;
      } | undefined;
      intersection: {
        'ANY restriction name': {
          values: Array<string>;
        } | undefined;
      } | undefined;
      union: {
        'ANY restriction name': {
          values: Array<string>;
        } | undefined;
      } | undefined;
    } | undefined;
  };
};
