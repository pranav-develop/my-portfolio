export const imgVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    final: {
        opacity: 1,
        scale: 1,
        transition: {duration: 1, type: "spring", stiffness: "200"}
    }
};

export const navLinkAnimation1 = {
    initial: {
        x: 3000,
        // opacity: 0,
    },
    final: {
        x: 0,
        // opacity: 1,
        transition: {duration: 2, type: "spring", delay: 0.3, stiffness: "40"}
    }
};

export const navLinkAnimation2 = {
    initial: {
        x: 3000,
        // opacity: 0,
    },
    final: {
        x: 0,
        // opacity: 1,
        transition: {duration: 2, type: "spring", delay: 0.6, stiffness: "40"}
    }
};

export const navLinkAnimation3 = {
    initial: {
        x: 3000,
        // opacity: 0,
    },
    final: {
        x: 0,
        // opacity: 1,
        transition: {duration: 2, type: "spring", delay: 0.9, stiffness: "40"}
    }
};

export const helloAnimation = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    final: {
        scale: 1,
        opacity: 1,
        transition: {duration: 2, type: "spring", delay: 0.3, stiffness: 100}
    }
};