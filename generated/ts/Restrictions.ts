/** This command allows the server to determine what restrictions are being enforced on the device, and the total sum of all restrictions. This command requires the Restrictions Query access right. This technically does work on macOS but it returns a blank dictionary and there no plans to change this behavior.
 *
 * - iOS:
 *    - introduced: 4.0
 *    - accessrights: AllowQueryRestrictions
 *    - supervised: false
 *    - requiresdep: false
 *    - sharedipad: {mode:allowed,devicechannel:true,userchannel:true}
 *    - userenrollment: {mode:forbidden}
 *
 * - macOS:
 *    - introduced: n/a
 *
 * - tvOS:
 *    - introduced: 9.0
 *    - accessrights: AllowQueryRestrictions
 *    - supervised: false
 *
 * - visionOS:
 *    - introduced: 1.1
 *    - accessrights: AllowQueryRestrictions
 *    - supervised: false
 *    - requiresdep: false
 *    - userenrollment: {mode:forbidden}
 *
 * - watchOS:
 *    - introduced: 10.0
 *    - accessrights: AllowQueryRestrictions
 *    - supervised: false
 */
export type Restrictions = {
    /** A dictionary that contains the global restrictions in effect. This value is available in iOS 4 and later, and tvOS 6.1 and later. */
    GlobalRestrictions: {
        /** A dictionary of Boolean restrictions. */
        restrictedBool: {
            /** The Boolean restriction parameters. */
            'ANY restriction name': {
                /** The value of the restriction. */
                value: boolean;
            } | undefined;
        } | undefined;
        /** A dictionary of numeric restrictions. */
        restrictedValue: {
            /** The numeric restriction parameters. */
            'ANY restriction name': {
                /** The value of the restriction. */
                value: number;
            } | undefined;
        } | undefined;
        /** A dictionary of intersected restrictions. Intersected restrictions indicate that new restrictions can only reduce the number of strings in the set. */
        intersection: {
            /** The intersected restriction parameters. */
            'ANY restriction name': {
                /** The values of the restriction. */
                values: Array<string>;
            } | undefined;
        } | undefined;
        /** A dictionary of unioned restrictions. Unioned restrictions indicate that new restrictions can add to the set. */
        union: {
            /** The unioned restriction parameters. */
            'ANY restriction name': {
                /** The values of the restriction. */
                values: Array<string>;
            } | undefined;
        } | undefined;
    };
    /** A dictionary that contains dictionaries of restrictions from each profile. This value is only available when 'ProfileRestrictions' is 'true' in the command. The keys are the identifiers of the profiles. This value is available in iOS 4 and later, and tvOS 6.1 and later. */
    ProfileRestrictions: {
        /** The profile identifiers. */
        'ANY profile identifier': {
            /** A dictionary of Boolean restrictions. */
            restrictedBool: {
                /** The Boolean restriction parameters. */
                'ANY restriction name': {
                    /** The value of the restriction. */
                    value: boolean;
                } | undefined;
            } | undefined;
            /** A dictionary of numeric restrictions. */
            restrictedValue: {
                /** The numeric restriction parameters. */
                'ANY restriction name': {
                    /** The value of the restriction. */
                    value: number;
                } | undefined;
            } | undefined;
            /** A dictionary of intersected restrictions. Intersected restrictions indicate that new restrictions can only reduce the number of strings in the set. */
            intersection: {
                /** The intersected restriction parameters. */
                'ANY restriction name': {
                    /** The values of the restriction. */
                    values: Array<string>;
                } | undefined;
            } | undefined;
            /** A dictionary of unioned restrictions. Unioned restrictions indicate that new restrictions can add to the set. */
            union: {
                /** The unioned restriction parameters. */
                'ANY restriction name': {
                    /** The values of the restriction. */
                    values: Array<string>;
                } | undefined;
            } | undefined;
        } | undefined;
    };
};
