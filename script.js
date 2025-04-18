/**
 * Calculateur de baies non protégées
 * Implémentation des calculs de pourcentages maximaux de baies non protégées
 * selon les tableaux 3.2.3.1 du Code National du Bâtiment (CNB)
 */

class CalculateurBaiesNonProtegees {
    /**
     * Constructeur avec les tableaux du CNB (version 2015)
     */
    constructor() {
        // Initialisation des tableaux du CNB
        this.tableaux = {
            // Tableau 3.2.3.1-B (bâtiment non entièrement protégé par gicleurs - groupes A, B div.3, C, D et F div.3)
            "B": this.initialiserTableau3231B(),
            // Tableau 3.2.3.1-C (bâtiment non entièrement protégé par gicleurs - groupes E et F div.1 et 2)
            "C": this.initialiserTableau3231C(),
            // Tableau 3.2.3.1-D (bâtiment entièrement protégé par gicleurs - groupes A, B, C, D et F div.3)
            "D": this.initialiserTableau3231D(),
            // Tableau 3.2.3.1-E (bâtiment entièrement protégé par gicleurs - groupes E et F div.1 et 2)
            "E": this.initialiserTableau3231E()
        };
    }
    
    /**
     * Initialise le tableau 3.2.3.1-B
     * @returns {Object} Tableau structuré
     */
    initialiserTableau3231B() {
        const tableau = {
            "< 3:1": {},
            "3:1 à 10:1": {},
            "> 10:1": {}
        };
        
        // Surfaces de 10 m²
        tableau["< 3:1"][10] = {
            0: 0, 1.2: 8, 1.5: 10, 2.0: 18, 2.5: 29, 3: 46, 4: 91, 5: 100
        };
        tableau["3:1 à 10:1"][10] = {
            0: 0, 1.2: 8, 1.5: 12, 2.0: 21, 2.5: 33, 3: 50, 4: 96, 5: 100
        };
        tableau["> 10:1"][10] = {
            0: 0, 1.2: 11, 1.5: 18, 2.0: 32, 2.5: 48, 3: 68, 4: 100
        };
        
        // Surfaces de 15 m²
        tableau["< 3:1"][15] = {
            0: 0, 1.2: 7, 1.5: 9, 2.0: 14, 2.5: 22, 3: 33, 4: 63, 5: 100
        };
        tableau["3:1 à 10:1"][15] = {
            0: 0, 1.2: 8, 1.5: 10, 2.0: 17, 2.5: 25, 3: 37, 4: 67, 5: 100
        };
        tableau["> 10:1"][15] = {
            0: 0, 1.2: 10, 1.5: 15, 2.0: 26, 2.5: 39, 3: 53, 4: 87, 5: 100
        };
        
        // Surfaces de 20 m²
        tableau["< 3:1"][20] = {
            0: 0, 1.2: 7, 1.5: 9, 2.0: 12, 2.5: 18, 3: 26, 4: 49, 5: 81, 6: 100
        };
        tableau["3:1 à 10:1"][20] = {
            0: 0, 1.2: 8, 1.5: 10, 2.0: 15, 2.5: 21, 3: 30, 4: 53, 5: 85, 6: 100
        };
        tableau["> 10:1"][20] = {
            0: 0, 1.2: 9, 1.5: 14, 2.0: 23, 2.5: 33, 3: 45, 4: 72, 5: 100
        };
        
        // Surfaces de 25 m²
        tableau["< 3:1"][25] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 11, 2.5: 16, 3: 23, 4: 41, 5: 66, 6: 98, 7: 100
        };
        tableau["3:1 à 10:1"][25] = {
            0: 0, 1.2: 8, 1.5: 9, 2.0: 13, 2.5: 19, 3: 26, 4: 45, 5: 70, 6: 100
        };
        tableau["> 10:1"][25] = {
            0: 0, 1.2: 9, 1.5: 13, 2.0: 21, 2.5: 30, 3: 39, 4: 62, 5: 90, 6: 100
        };
        
        // Surfaces de 30 m²
        tableau["< 3:1"][30] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 11, 2.5: 15, 3: 20, 4: 35, 5: 56, 6: 83, 7: 100
        };
        tableau["3:1 à 10:1"][30] = {
            0: 0, 1.2: 7, 1.5: 9, 2.0: 12, 2.5: 17, 3: 23, 4: 39, 5: 61, 6: 88, 7: 100
        };
        tableau["> 10:1"][30] = {
            0: 0, 1.2: 8, 1.5: 12, 2.0: 19, 2.5: 27, 3: 36, 4: 56, 5: 79, 6: 100
        };
        
        // Surfaces de 40 m²
        tableau["< 3:1"][40] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 10, 2.5: 13, 3: 17, 4: 28, 5: 44, 6: 64, 7: 89, 8: 100
        };
        tableau["3:1 à 10:1"][40] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 11, 2.5: 15, 3: 20, 4: 32, 5: 48, 6: 69, 7: 93, 8: 100
        };
        tableau["> 10:1"][40] = {
            0: 0, 1.2: 8, 1.5: 11, 2.0: 17, 2.5: 24, 3: 31, 4: 47, 5: 66, 6: 88, 7: 100
        };
        
        // Surfaces de 50 m²
        tableau["< 3:1"][50] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 9, 2.5: 12, 3: 15, 4: 24, 5: 37, 6: 53, 7: 72, 8: 96, 9: 100
        };
        tableau["3:1 à 10:1"][50] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 10, 2.5: 14, 3: 18, 4: 28, 5: 41, 6: 57, 7: 77, 8: 100
        };
        tableau["> 10:1"][50] = {
            0: 0, 1.2: 8, 1.5: 10, 2.0: 15, 2.5: 21, 3: 28, 4: 41, 5: 57, 6: 76, 7: 97, 8: 100
        };
        
        // Surfaces de 60 m²
        tableau["< 3:1"][60] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 9, 2.5: 11, 3: 14, 4: 21, 5: 32, 6: 45, 7: 62, 8: 81, 9: 100
        };
        tableau["3:1 à 10:1"][60] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 10, 2.5: 13, 3: 16, 4: 25, 5: 36, 6: 49, 7: 66, 8: 85, 9: 100
        };
        tableau["> 10:1"][60] = {
            0: 0, 1.2: 8, 1.5: 10, 2.0: 14, 2.5: 20, 3: 25, 4: 38, 5: 51, 6: 67, 7: 85, 8: 100
        };
        
        // Surfaces de 80 m²
        tableau["< 3:1"][80] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 8, 2.5: 10, 3: 12, 4: 18, 5: 26, 6: 36, 7: 48, 8: 62, 9: 79, 10: 98, 11: 100
        };
        tableau["3:1 à 10:1"][80] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 9, 2.5: 11, 3: 14, 4: 21, 5: 29, 6: 40, 7: 52, 8: 67, 9: 84, 10: 100
        };
        tableau["> 10:1"][80] = {
            0: 0, 1.2: 8, 1.5: 9, 2.0: 13, 2.5: 17, 3: 22, 4: 32, 5: 44, 6: 56, 7: 70, 8: 86, 9: 100
        };
        
        // Surfaces de 100 m²
        tableau["< 3:1"][100] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 8, 2.5: 9, 3: 11, 4: 16, 5: 22, 6: 30, 7: 40, 8: 51, 9: 65, 10: 80, 11: 97, 12: 100
        };
        tableau["3:1 à 10:1"][100] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 9, 2.5: 11, 3: 13, 4: 18, 5: 25, 6: 34, 7: 44, 8: 56, 9: 69, 10: 84, 11: 100
        };
        tableau["> 10:1"][100] = {
            0: 0, 1.2: 7, 1.5: 9, 2.0: 12, 2.5: 16, 3: 20, 4: 29, 5: 39, 6: 49, 7: 61, 8: 74, 9: 89, 10: 100
        };
        
        // Surfaces de 150 m²
        tableau["< 3:1"][150] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 8, 2.5: 9, 3: 10, 4: 13, 5: 17, 6: 22, 7: 29, 8: 37, 9: 46, 10: 56, 11: 67, 12: 79, 13: 93, 14: 100
        };
        tableau["3:1 à 10:1"][150] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 8, 2.5: 10, 3: 11, 4: 15, 5: 20, 6: 26, 7: 33, 8: 41, 9: 50, 10: 60, 11: 71, 12: 84, 13: 97, 14: 100
        };
        tableau["> 10:1"][150] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 11, 2.5: 13, 3: 17, 4: 24, 5: 31, 6: 39, 7: 48, 8: 57, 9: 68, 10: 79, 11: 91, 12: 100
        };
        
        // Surfaces de 250 m²
        tableau["< 3:1"][250] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 8, 3: 9, 4: 10, 5: 13, 6: 16, 7: 20, 8: 25, 9: 30, 10: 36, 11: 43, 12: 51, 13: 59, 14: 68, 16: 87, 18: 100
        };
        tableau["3:1 à 10:1"][250] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 8, 2.5: 9, 3: 10, 4: 12, 5: 15, 6: 19, 7: 24, 8: 28, 9: 34, 10: 40, 11: 47, 12: 55, 13: 63, 14: 72, 16: 92, 18: 100
        };
        tableau["> 10:1"][250] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 9, 2.5: 11, 3: 14, 4: 19, 5: 24, 6: 30, 7: 36, 8: 43, 9: 50, 10: 57, 11: 65, 12: 73, 13: 82, 14: 92, 16: 100
        };
        
        // Surfaces de 350 m²
        tableau["< 3:1"][350] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 8, 3: 8, 4: 9, 5: 11, 6: 14, 7: 16, 8: 20, 9: 24, 10: 28, 11: 33, 12: 38, 13: 44, 14: 50, 16: 64, 18: 81, 20: 99, 25: 100
        };
        tableau["3:1 à 10:1"][350] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 8, 2.5: 8, 3: 9, 4: 11, 5: 13, 6: 16, 7: 19, 8: 23, 9: 27, 10: 32, 11: 37, 12: 42, 13: 48, 14: 55, 16: 69, 18: 85, 20: 100
        };
        tableau["> 10:1"][350] = {
            0: 0, 1.2: 7, 1.5: 8, 2.0: 9, 2.5: 10, 3: 12, 4: 16, 5: 21, 6: 25, 7: 30, 8: 36, 9: 41, 10: 47, 11: 53, 12: 59, 13: 66, 14: 73, 16: 88, 18: 100
        };
        
        // Surfaces de 500 m²
        tableau["< 3:1"][500] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 7, 3: 8, 4: 9, 5: 10, 6: 12, 7: 14, 8: 16, 9: 19, 10: 22, 11: 25, 12: 29, 13: 33, 14: 37, 16: 47, 18: 59, 20: 71, 25: 100
        };
        tableau["3:1 à 10:1"][500] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 8, 3: 8, 4: 10, 5: 12, 6: 14, 7: 16, 8: 19, 9: 22, 10: 25, 11: 29, 12: 33, 13: 37, 14: 41, 16: 52, 18: 63, 20: 76, 25: 100
        };
        tableau["> 10:1"][500] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 8, 2.5: 9, 3: 11, 4: 14, 5: 18, 6: 22, 7: 25, 8: 30, 9: 34, 10: 38, 11: 43, 12: 48, 13: 53, 14: 58, 16: 70, 18: 82, 20: 96, 25: 100
        };
        
        // Surfaces de 1000 m²
        tableau["< 3:1"][1000] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 7, 3: 7, 4: 8, 5: 9, 6: 9, 7: 10, 8: 12, 9: 13, 10: 14, 11: 16, 12: 18, 13: 20, 14: 22, 16: 27, 18: 33, 20: 39, 25: 58, 30: 82, 35: 100
        };
        tableau["3:1 à 10:1"][1000] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 7, 3: 8, 4: 9, 5: 10, 6: 11, 7: 12, 8: 14, 9: 15, 10: 17, 11: 19, 12: 21, 13: 23, 14: 26, 16: 31, 18: 37, 20: 43, 25: 63, 30: 86, 35: 100
        };
        tableau["> 10:1"][1000] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 8, 2.5: 8, 3: 9, 4: 11, 5: 13, 6: 16, 7: 19, 8: 21, 9: 24, 10: 27, 11: 30, 12: 33, 13: 36, 14: 39, 16: 46, 18: 53, 20: 60, 25: 82, 30: 100
        };
        
        // Surfaces de 2000 m²
        tableau["< 3:1"][2000] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 7, 3: 7, 4: 7, 5: 8, 6: 8, 7: 9, 8: 9, 9: 10, 10: 11, 11: 12, 12: 13, 13: 14, 14: 15, 16: 17, 18: 20, 20: 23, 25: 33, 30: 44, 35: 58, 40: 74, 45: 93, 50: 100
        };
        tableau["3:1 à 10:1"][2000] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 7, 3: 7, 4: 8, 5: 8, 6: 9, 7: 10, 8: 11, 9: 12, 10: 13, 11: 14, 12: 15, 13: 16, 14: 17, 16: 20, 18: 23, 20: 27, 25: 37, 30: 49, 35: 63, 40: 79, 45: 97, 50: 100
        };
        tableau["> 10:1"][2000] = {
            0: 0, 1.2: 7, 1.5: 7, 2.0: 7, 2.5: 8, 3: 8, 4: 9, 5: 11, 6: 12, 7: 14, 8: 16, 9: 18, 10: 19, 11: 21, 12: 23, 13: 25, 14: 27, 16: 32, 18: 36, 20: 40, 25: 53, 30: 66, 35: 82, 40: 99, 45: 100
        };
        
        return tableau;
    }
    
    /**
     * Initialise le tableau 3.2.3.1-C
     * @returns {Object} Tableau structuré
     */
    initialiserTableau3231C() {
        const tableau = {
            "< 3:1": {},
            "3:1 à 10:1": {},
            "> 10:1": {}
        };
        
        // Surfaces de 10 m²
        tableau["< 3:1"][10] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 9, 2.5: 15, 3: 23, 4: 46, 5: 77, 6: 100
        };
        tableau["3:1 à 10:1"][10] = {
            0: 0, 1.2: 4, 1.5: 6, 2.0: 10, 2.5: 17, 3: 25, 4: 48, 5: 79, 6: 100
        };
        tableau["> 10:1"][10] = {
            0: 0, 1.2: 5, 1.5: 9, 2.0: 16, 2.5: 24, 3: 34, 4: 58, 5: 91, 6: 100
        };
        
        // Surfaces de 15 m²
        tableau["< 3:1"][15] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 7, 2.5: 11, 3: 16, 4: 32, 5: 53, 6: 79, 7: 100
        };
        tableau["3:1 à 10:1"][15] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 8, 2.5: 13, 3: 18, 4: 34, 5: 55, 6: 82, 7: 100
        };
        tableau["> 10:1"][15] = {
            0: 0, 1.2: 5, 1.5: 8, 2.0: 13, 2.5: 19, 3: 26, 4: 43, 5: 66, 6: 93, 7: 100
        };
        
        // Surfaces de 20 m²
        tableau["< 3:1"][20] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 6, 2.5: 9, 3: 13, 4: 25, 5: 40, 6: 61, 7: 85, 8: 100
        };
        tableau["3:1 à 10:1"][20] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 7, 2.5: 11, 3: 15, 4: 27, 5: 43, 6: 63, 7: 87, 8: 100
        };
        tableau["> 10:1"][20] = {
            0: 0, 1.2: 5, 1.5: 7, 2.0: 11, 2.5: 17, 3: 22, 4: 36, 5: 53, 6: 74, 7: 99, 8: 100
        };
        
        // Surfaces de 25 m²
        tableau["< 3:1"][25] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 6, 2.5: 8, 3: 11, 4: 20, 5: 33, 6: 49, 7: 69, 8: 92, 9: 100
        };
        tableau["3:1 à 10:1"][25] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 7, 2.5: 9, 3: 13, 4: 22, 5: 35, 6: 51, 7: 71, 8: 94, 9: 100
        };
        tableau["> 10:1"][25] = {
            0: 0, 1.2: 4, 1.5: 6, 2.0: 10, 2.5: 15, 3: 20, 4: 31, 5: 45, 6: 62, 7: 82, 8: 100
        };
        
        // Surfaces de 30 m²
        tableau["< 3:1"][30] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 5, 2.5: 7, 3: 10, 4: 18, 5: 28, 6: 42, 7: 58, 8: 77, 9: 100
        };
        tableau["3:1 à 10:1"][30] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 6, 2.5: 9, 3: 12, 4: 20, 5: 30, 6: 44, 7: 60, 8: 80, 9: 100
        };
        tableau["> 10:1"][30] = {
            0: 0, 1.2: 4, 1.5: 6, 2.0: 10, 2.5: 14, 3: 18, 4: 28, 5: 40, 6: 54, 7: 71, 8: 91, 9: 100
        };
        
        // Surfaces de 40 m²
        tableau["< 3:1"][40] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 5, 2.5: 6, 3: 8, 4: 14, 5: 22, 6: 32, 7: 44, 8: 59, 9: 76, 10: 94, 11: 100
        };
        tableau["3:1 à 10:1"][40] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 6, 2.5: 8, 3: 10, 4: 16, 5: 24, 6: 34, 7: 47, 8: 61, 9: 78, 10: 97, 11: 100
        };
        tableau["> 10:1"][40] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 8, 2.5: 12, 3: 15, 4: 23, 5: 33, 6: 44, 7: 57, 8: 72, 9: 89, 10: 100
        };
        
        // Surfaces de 50 m²
        tableau["< 3:1"][50] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 5, 2.5: 6, 3: 7, 4: 12, 5: 18, 6: 26, 7: 36, 8: 48, 9: 61, 10: 76, 11: 93, 12: 100
        };
        tableau["3:1 à 10:1"][50] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 5, 2.5: 7, 3: 9, 4: 14, 5: 20, 6: 29, 7: 38, 8: 50, 9: 63, 10: 79, 11: 95, 12: 100
        };
        tableau["> 10:1"][50] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 8, 2.5: 11, 3: 14, 4: 21, 5: 29, 6: 38, 7: 48, 8: 61, 9: 74, 10: 90, 11: 100
        };
        
        // Surfaces de 60 m²
        tableau["< 3:1"][60] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 5, 3: 7, 4: 11, 5: 16, 6: 23, 7: 31, 8: 40, 9: 52, 10: 64, 11: 78, 12: 94, 13: 100
        };
        tableau["3:1 à 10:1"][60] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 5, 2.5: 6, 3: 8, 4: 12, 5: 18, 6: 25, 7: 33, 8: 43, 9: 54, 10: 66, 11: 81, 12: 96, 13: 100
        };
        tableau["> 10:1"][60] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 7, 2.5: 10, 3: 13, 4: 19, 5: 26, 6: 34, 7: 43, 8: 53, 9: 64, 10: 77, 11: 92, 12: 100
        };
        
        // Surfaces de 80 m²
        tableau["< 3:1"][80] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 5, 3: 6, 4: 9, 5: 13, 6: 18, 7: 24, 8: 31, 9: 40, 10: 49, 11: 60, 12: 71, 13: 84, 14: 98, 15: 100
        };
        tableau["3:1 à 10:1"][80] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 5, 2.5: 6, 3: 7, 4: 10, 5: 15, 6: 20, 7: 26, 8: 33, 9: 42, 10: 51, 11: 62, 12: 74, 13: 86, 14: 100
        };
        tableau["> 10:1"][80] = {
            0: 0, 1.2: 4, 1.5: 5, 2.0: 6, 2.5: 9, 3: 11, 4: 16, 5: 22, 6: 28, 7: 35, 8: 43, 9: 52, 10: 62, 11: 73, 12: 85, 13: 98, 14: 100
        };
        
        // Surfaces de 100 m²
        tableau["< 3:1"][100] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 5, 3: 5, 4: 8, 5: 11, 6: 15, 7: 20, 8: 26, 9: 32, 10: 40, 11: 48, 12: 58, 13: 68, 14: 79, 15: 100
        };
        tableau["3:1 à 10:1"][100] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 5, 3: 6, 4: 9, 5: 13, 6: 17, 7: 22, 8: 28, 9: 35, 10: 42, 11: 51, 12: 60, 13: 70, 14: 81, 15: 100
        };
        tableau["> 10:1"][100] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 6, 2.5: 8, 3: 10, 4: 14, 5: 19, 6: 25, 7: 31, 8: 37, 9: 44, 10: 52, 11: 61, 12: 71, 13: 81, 14: 92, 15: 100
        };
        
        // Surfaces de 150 m²
        tableau["< 3:1"][150] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 5, 4: 6, 5: 8, 6: 11, 7: 14, 8: 18, 9: 23, 10: 28, 11: 33, 12: 40, 13: 46, 14: 54, 16: 70, 18: 89, 20: 100
        };
        tableau["3:1 à 10:1"][150] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 5, 3: 6, 4: 8, 5: 10, 6: 13, 7: 16, 8: 20, 9: 25, 10: 30, 11: 36, 12: 42, 13: 49, 14: 56, 16: 73, 18: 92, 20: 100
        };
        tableau["> 10:1"][150] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 5, 2.5: 7, 3: 8, 4: 12, 5: 16, 6: 20, 7: 24, 8: 29, 9: 34, 10: 39, 11: 46, 12: 52, 13: 59, 14: 67, 16: 84, 18: 100
        };
        
        // Surfaces de 250 m²
        tableau["< 3:1"][250] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 5, 5: 7, 6: 8, 7: 10, 8: 12, 9: 15, 10: 18, 11: 22, 12: 25, 13: 29, 14: 34, 16: 44, 18: 55, 20: 68, 25: 100
        };
        tableau["3:1 à 10:1"][250] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 5, 4: 6, 5: 8, 6: 10, 7: 12, 8: 14, 9: 17, 10: 20, 11: 24, 12: 27, 13: 32, 14: 36, 16: 46, 18: 57, 20: 70, 25: 100
        };
        tableau["> 10:1"][250] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 5, 2.5: 6, 3: 7, 4: 9, 5: 12, 6: 15, 7: 18, 8: 21, 9: 25, 10: 28, 11: 32, 12: 37, 13: 41, 14: 46, 16: 56, 18: 68, 20: 81, 25: 100
        };
        
        // Surfaces de 350 m²
        tableau["< 3:1"][350] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 10, 9: 12, 10: 14, 11: 16, 12: 19, 13: 22, 14: 25, 16: 32, 18: 40, 20: 49, 25: 77, 30: 100
        };
        tableau["3:1 à 10:1"][350] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 5, 5: 7, 6: 8, 7: 10, 8: 12, 9: 14, 10: 16, 11: 18, 12: 21, 13: 24, 14: 27, 16: 34, 18: 43, 20: 52, 25: 79, 30: 100
        };
        tableau["> 10:1"][350] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 5, 3: 6, 4: 8, 5: 10, 6: 13, 7: 15, 8: 18, 9: 21, 10: 23, 11: 26, 12: 30, 13: 33, 14: 36, 16: 44, 18: 53, 20: 62, 25: 90, 30: 100
        };
        
        // Surfaces de 500 m²
        tableau["< 3:1"][500] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 11, 11: 12, 12: 14, 13: 16, 14: 18, 16: 24, 18: 29, 20: 36, 25: 55, 30: 78, 35: 100
        };
        tableau["3:1 à 10:1"][500] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 11, 10: 13, 11: 14, 12: 16, 13: 18, 14: 20, 16: 26, 18: 31, 20: 38, 25: 57, 30: 80, 35: 100
        };
        tableau["> 10:1"][500] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 5, 3: 5, 4: 7, 5: 9, 6: 11, 7: 13, 8: 15, 9: 17, 10: 19, 11: 21, 12: 24, 13: 26, 14: 29, 16: 35, 18: 41, 20: 48, 25: 68, 30: 92, 35: 100
        };
        
        // Surfaces de 1000 m²
        tableau["< 3:1"][1000] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 4, 5: 4, 6: 5, 7: 5, 8: 6, 9: 6, 10: 7, 11: 8, 12: 9, 13: 10, 14: 11, 16: 14, 18: 16, 20: 20, 25: 29, 30: 41, 35: 55, 40: 71, 45: 89, 50: 100
        };
        tableau["3:1 à 10:1"][1000] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 4, 5: 5, 6: 5, 7: 6, 8: 7, 9: 8, 10: 9, 11: 10, 12: 11, 13: 12, 14: 13, 16: 15, 18: 18, 20: 22, 25: 31, 30: 43, 35: 57, 40: 73, 45: 91, 50: 100
        };
        tableau["> 10:1"][1000] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 5, 4: 6, 5: 7, 6: 8, 7: 9, 8: 11, 9: 12, 10: 13, 11: 15, 12: 16, 13: 18, 14: 20, 16: 23, 18: 26, 20: 30, 25: 41, 30: 53, 35: 68, 40: 84, 45: 100
        };
        
        // Surfaces de 2000 m²
        tableau["< 3:1"][2000] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 4, 5: 4, 6: 4, 7: 4, 8: 5, 9: 5, 10: 5, 11: 6, 12: 6, 13: 7, 14: 7, 16: 9, 18: 10, 20: 12, 25: 16, 30: 22, 35: 29, 40: 37, 45: 46, 50: 56, 55: 68, 60: 80, 65: 94, 70: 100
        };
        tableau["3:1 à 10:1"][2000] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 4, 5: 4, 6: 5, 7: 5, 8: 5, 9: 6, 10: 6, 11: 7, 12: 7, 13: 8, 14: 9, 16: 10, 18: 12, 20: 13, 25: 18, 30: 24, 35: 31, 40: 39, 45: 49, 50: 59, 55: 70, 60: 83, 65: 96, 70: 100
        };
        tableau["> 10:1"][2000] = {
            0: 0, 1.2: 4, 1.5: 4, 2.0: 4, 2.5: 4, 3: 4, 4: 5, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 16: 16, 18: 18, 20: 20, 25: 26, 30: 33, 35: 41, 40: 50, 45: 59, 50: 70, 55: 81, 60: 94, 65: 100
        };
        
        return tableau;
    }
    
    /**
     * Initialise le tableau 3.2.3.1-D
     * @returns {Object} Tableau structuré
     */
    initialiserTableau3231D() {
        const tableau = {};
        
        // Le tableau D est structuré différemment, il n'a que des surfaces sans catégories de rapport L/H
        tableau[10] = {
            0: 0, 1.2: 16, 1.5: 24, 2.0: 42, 2.5: 66, 3: 100
        };
        tableau[15] = {
            0: 0, 1.2: 16, 1.5: 20, 2.0: 34, 2.5: 50, 3: 74, 4: 100
        };
        tableau[20] = {
            0: 0, 1.2: 16, 1.5: 20, 2.0: 30, 2.5: 42, 3: 60, 4: 100
        };
        tableau[25] = {
            0: 0, 1.2: 14, 1.5: 18, 2.0: 26, 2.5: 38, 3: 52, 4: 90, 5: 100
        };
        tableau[30] = {
            0: 0, 1.2: 14, 1.5: 18, 2.0: 24, 2.5: 34, 3: 46, 4: 78, 5: 100
        };
        tableau[40] = {
            0: 0, 1.2: 14, 1.5: 16, 2.0: 22, 2.5: 30, 3: 40, 4: 64, 5: 96, 6: 100
        };
        tableau[50] = {
            0: 0, 1.2: 14, 1.5: 16, 2.0: 20, 2.5: 28, 3: 36, 4: 56, 5: 82, 6: 100
        };
        tableau[60] = {
            0: 0, 1.2: 14, 1.5: 16, 2.0: 20, 2.5: 26, 3: 32, 4: 50, 5: 72, 6: 98, 7: 100
        };
        tableau[80] = {
            0: 0, 1.2: 14, 1.5: 16, 2.0: 18, 2.5: 22, 3: 28, 4: 42, 5: 58, 6: 80, 7: 100
        };
        tableau[100] = {
            0: 0, 1.2: 14, 1.5: 16, 2.0: 18, 2.5: 22, 3: 26, 4: 38, 5: 50, 6: 68, 7: 88, 8: 100
        };
        tableau[150] = {
            0: 0, 1.2: 14, 1.5: 14, 2.0: 16, 2.5: 20, 3: 22, 4: 30, 5: 40, 6: 52, 7: 66, 8: 82, 9: 100
        };
        
        return tableau;
    }
    
    /**
     * Initialise le tableau 3.2.3.1-E
     * @returns {Object} Tableau structuré
     */
    initialiserTableau3231E() {
        const tableau = {};
        
        // Le tableau E est structuré différemment, il n'a que des surfaces sans catégories de rapport L/H
        tableau[10] = {
            0: 0, 1.2: 8, 1.5: 12, 2.0: 20, 2.5: 34, 3: 50, 4: 96, 5: 100
        };
        tableau[15] = {
            0: 0, 1.2: 8, 1.5: 10, 2.0: 16, 2.5: 26, 3: 36, 4: 68, 5: 100
        };
        tableau[20] = {
            0: 0, 1.2: 8, 1.5: 10, 2.0: 14, 2.5: 22, 3: 30, 4: 54, 5: 86, 6: 100
        };
        tableau[25] = {
            0: 0, 1.2: 8, 1.5: 10, 2.0: 14, 2.5: 18, 3: 26, 4: 44, 5: 70, 6: 100
        };
        tableau[30] = {
            0: 0, 1.2: 8, 1.5: 8, 2.0: 12, 2.5: 18, 3: 24, 4: 40, 5: 60, 6: 88, 7: 100
        };
        tableau[40] = {
            0: 0, 1.2: 8, 1.5: 8, 2.0: 12, 2.5: 16, 3: 20, 4: 32, 5: 48, 6: 68, 7: 94, 8: 100
        };
        tableau[50] = {
            0: 0, 1.2: 8, 1.5: 8, 2.0: 10, 2.5: 14, 3: 18, 4: 28, 5: 40, 6: 58, 7: 76, 8: 100
        };
        tableau[60] = {
            0: 0, 1.2: 8, 1.5: 8, 2.0: 10, 2.5: 12, 3: 16, 4: 24, 5: 36, 6: 50, 7: 66, 8: 86, 9: 100
        };
        tableau[80] = {
            0: 0, 1.2: 8, 1.5: 8, 2.0: 10, 2.5: 12, 3: 14, 4: 20, 5: 30, 6: 40, 7: 52, 8: 66, 9: 84, 10: 100
        };
        tableau[100] = {
            0: 0, 1.2: 8, 1.5: 8, 2.0: 8, 2.5: 10, 3: 12, 4: 18, 5: 26, 6: 34, 7: 44, 8: 56, 9: 70, 10: 84, 11: 100
        };
        tableau[150] = {
            0: 0, 1.2: 8, 1.5: 8, 2.0: 8, 2.5: 10, 3: 12, 4: 16, 5: 20, 6: 26, 7: 32, 8: 40, 9: 50, 10: 60, 11: 72, 12: 84, 13: 98, 14: 100
        };
        tableau[200] = {
            0: 0, 1.2: 8, 1.5: 8, 2.0: 8, 2.5: 8, 3: 10, 4: 14, 5: 18, 6: 22, 7: 28, 8: 34, 9: 42, 10: 50, 11: 60, 12: 68, 13: 80, 14: 92, 15: 100
        };
        
        return tableau;
    }
    
    /**
     * Détermine la catégorie de rapport L/H
     * @param {number} largeur - Largeur de la façade (en mètres)
     * @param {number} hauteur - Hauteur de la façade (en mètres)
     * @returns {string} Catégorie de rapport L/H
     */
    determinerCategorieRapportLH(largeur, hauteur) {
        const rapportLH = largeur / hauteur;
        
        if (rapportLH < 3) {
            return "< 3:1";
        } else if (rapportLH >= 3 && rapportLH <= 10) {
            return "3:1 à 10:1";
        } else {
            return "> 10:1";
        }
    }
    
    /**
     * Calcule le pourcentage maximal de baies non protégées autorisées
     * @param {number} largeur - Largeur de la façade (en mètres)
     * @param {number} hauteur - Hauteur de la façade (en mètres)
     * @param {number} distance - Distance limitative (en mètres)
     * @param {string} usage - Groupe d'usage (A, B, C, D, E, F)
     * @param {number} division - Division du groupe d'usage (1, 2, 3)
     * @param {boolean} protectionGicleurs - Indique si le bâtiment est entièrement protégé par gicleurs
     * @param {number} surface - Surface de la façade (en m²) (calculée automatiquement si non fournie)
     * @returns {number} Pourcentage maximal de baies non protégées autorisées
     */
    calculerPourcentage(largeur, hauteur, distance, usage, division, protectionGicleurs, surface = null) {
        // Calcul de la surface si non fournie
        if (surface === null) {
            surface = largeur * hauteur;
        }
        
        // Déterminer quel tableau utiliser
        let codeTableau;
        if (protectionGicleurs) {
            // Bâtiment entièrement protégé par gicleurs
            if (usage === 'E' || (usage === 'F' && (division === 1 || division === 2))) {
                codeTableau = "E"; // Tableau 3.2.3.1-E
            } else {
                codeTableau = "D"; // Tableau 3.2.3.1-D
            }
        } else {
            // Bâtiment non entièrement protégé par gicleurs
            if (usage === 'E' || (usage === 'F' && (division === 1 || division === 2))) {
                codeTableau = "C"; // Tableau 3.2.3.1-C
            } else {
                codeTableau = "B"; // Tableau 3.2.3.1-B
            }
        }
        
        const tableauReference = this.tableaux[codeTableau];
        
        // Pour les tableaux D et E, pas besoin de catégorie de rapport L/H
        if (codeTableau === "D" || codeTableau === "E") {
            return this.calculerPourcentageTableauxDE(tableauReference, surface, distance);
        } else {
            // Détermination du rapport L/H
            const categorieRapportLH = this.determinerCategorieRapportLH(largeur, hauteur);
            return this.calculerPourcentageTableauxBC(tableauReference, categorieRapportLH, surface, distance);
        }
    }
    
    /**
     * Calcule le pourcentage pour les tableaux B et C
     * @param {Object} tableauReference - Tableau de référence
     * @param {string} categorieRapportLH - Catégorie de rapport L/H
     * @param {number} surface - Surface de la façade
     * @param {number} distance - Distance limitative
     * @returns {number} Pourcentage maximal
     */
    calculerPourcentageTableauxBC(tableauReference, categorieRapportLH, surface, distance) {
        // Obtenir les plages de surface du tableau
        const plagesSuperficie = this.getPlagesSuperficieBC(tableauReference, categorieRapportLH);
        
        // Trouver les valeurs de superficie encadrantes
        let superficieInf = null;
        let superficieSup = null;
        
        for (let i = 0; i < plagesSuperficie.length - 1; i++) {
            if (surface >= plagesSuperficie[i] && surface <= plagesSuperficie[i + 1]) {
                superficieInf = plagesSuperficie[i];
                superficieSup = plagesSuperficie[i + 1];
                break;
            }
        }
        
        // Cas limites pour la superficie
        if (superficieInf === null) {
            if (surface < plagesSuperficie[0]) {
                superficieInf = plagesSuperficie[0];
                superficieSup = plagesSuperficie[0];
            } else {
                superficieInf = plagesSuperficie[plagesSuperficie.length - 1];
                superficieSup = plagesSuperficie[plagesSuperficie.length - 1];
            }
        }
        
        // Obtenir les plages de distance du tableau
        const plagesDistanceInf = this.getPlagesDistanceBC(tableauReference, categorieRapportLH, superficieInf);
        const plagesDistanceSup = this.getPlagesDistanceBC(tableauReference, categorieRapportLH, superficieSup);
        
        // Trouver les valeurs de distance encadrantes pour la superficie inférieure
        let distanceInfInf = null;
        let distanceInfSup = null;
        
        for (let i = 0; i < plagesDistanceInf.length - 1; i++) {
            if (distance >= plagesDistanceInf[i] && distance <= plagesDistanceInf[i + 1]) {
                distanceInfInf = plagesDistanceInf[i];
                distanceInfSup = plagesDistanceInf[i + 1];
                break;
            }
        }
        
        // Cas limites pour la distance (superficie inférieure)
        if (distanceInfInf === null) {
            if (distance < plagesDistanceInf[0]) {
                distanceInfInf = plagesDistanceInf[0];
                distanceInfSup = plagesDistanceInf[0];
            } else {
                distanceInfInf = plagesDistanceInf[plagesDistanceInf.length - 1];
                distanceInfSup = plagesDistanceInf[plagesDistanceInf.length - 1];
            }
        }
        
        // Trouver les valeurs de distance encadrantes pour la superficie supérieure
        let distanceSupInf = null;
        let distanceSupSup = null;
        
        for (let i = 0; i < plagesDistanceSup.length - 1; i++) {
            if (distance >= plagesDistanceSup[i] && distance <= plagesDistanceSup[i + 1]) {
                distanceSupInf = plagesDistanceSup[i];
                distanceSupSup = plagesDistanceSup[i + 1];
                break;
            }
        }
        
        // Cas limites pour la distance (superficie supérieure)
        if (distanceSupInf === null) {
            if (distance < plagesDistanceSup[0]) {
                distanceSupInf = plagesDistanceSup[0];
                distanceSupSup = plagesDistanceSup[0];
            } else {
                distanceSupInf = plagesDistanceSup[plagesDistanceSup.length - 1];
                distanceSupSup = plagesDistanceSup[plagesDistanceSup.length - 1];
            }
        }
        
        // Obtenir les pourcentages pour les 4 points de référence
        const pourcentageInfInf = tableauReference[categorieRapportLH][superficieInf][distanceInfInf];
        const pourcentageInfSup = tableauReference[categorieRapportLH][superficieInf][distanceInfSup];
        const pourcentageSupInf = tableauReference[categorieRapportLH][superficieSup][distanceSupInf];
        const pourcentageSupSup = tableauReference[categorieRapportLH][superficieSup][distanceSupSup];
        
        // Première interpolation: pour la distance à chaque superficie
        let pourcentageDistanceInf;
        if (distanceInfInf === distanceInfSup) {
            pourcentageDistanceInf = pourcentageInfInf;
        } else {
            pourcentageDistanceInf = pourcentageInfInf + 
                ((distance - distanceInfInf) / (distanceInfSup - distanceInfInf)) * 
                (pourcentageInfSup - pourcentageInfInf);
        }
        
        let pourcentageDistanceSup;
        if (distanceSupInf === distanceSupSup) {
            pourcentageDistanceSup = pourcentageSupInf;
        } else {
            pourcentageDistanceSup = pourcentageSupInf + 
                ((distance - distanceSupInf) / (distanceSupSup - distanceSupInf)) * 
                (pourcentageSupSup - pourcentageSupInf);
        }
        
        // Deuxième interpolation: pour la superficie
        let pourcentageFinal;
        if (superficieInf === superficieSup) {
            pourcentageFinal = pourcentageDistanceInf;
        } else {
            pourcentageFinal = pourcentageDistanceInf + 
                ((surface - superficieInf) / (superficieSup - superficieInf)) * 
                (pourcentageDistanceSup - pourcentageDistanceInf);
        }
        
        return pourcentageFinal;
    }
    
    /**
     * Calcule le pourcentage pour les tableaux D et E
     * @param {Object} tableauReference - Tableau de référence
     * @param {number} surface - Surface de la façade
     * @param {number} distance - Distance limitative
     * @returns {number} Pourcentage maximal
     */
    calculerPourcentageTableauxDE(tableauReference, surface, distance) {
        // Obtenir les plages de surface du tableau
        const plagesSuperficie = this.getPlagesSuperficieDE(tableauReference);
        
        // Trouver les valeurs de superficie encadrantes
        let superficieInf = null;
        let superficieSup = null;
        
        for (let i = 0; i < plagesSuperficie.length - 1; i++) {
            if (surface >= plagesSuperficie[i] && surface <= plagesSuperficie[i + 1]) {
                superficieInf = plagesSuperficie[i];
                superficieSup = plagesSuperficie[i + 1];
                break;
            }
        }
        
        // Cas limites pour la superficie
        if (superficieInf === null) {
            if (surface < plagesSuperficie[0]) {
                superficieInf = plagesSuperficie[0];
                superficieSup = plagesSuperficie[0];
            } else {
                superficieInf = plagesSuperficie[plagesSuperficie.length - 1];
                superficieSup = plagesSuperficie[plagesSuperficie.length - 1];
            }
        }
        
        // Obtenir les plages de distance du tableau
        const plagesDistanceInf = this.getPlagesDistanceDE(tableauReference, superficieInf);
        const plagesDistanceSup = this.getPlagesDistanceDE(tableauReference, superficieSup);
        
        // Trouver les valeurs de distance encadrantes pour la superficie inférieure
        let distanceInfInf = null;
        let distanceInfSup = null;
        
        for (let i = 0; i < plagesDistanceInf.length - 1; i++) {
            if (distance >= plagesDistanceInf[i] && distance <= plagesDistanceInf[i + 1]) {
                distanceInfInf = plagesDistanceInf[i];
                distanceInfSup = plagesDistanceInf[i + 1];
                break;
            }
        }
        
        // Cas limites pour la distance (superficie inférieure)
        if (distanceInfInf === null) {
            if (distance < plagesDistanceInf[0]) {
                distanceInfInf = plagesDistanceInf[0];
                distanceInfSup = plagesDistanceInf[0];
            } else {
                distanceInfInf = plagesDistanceInf[plagesDistanceInf.length - 1];
                distanceInfSup = plagesDistanceInf[plagesDistanceInf.length - 1];
            }
        }
        
        // Trouver les valeurs de distance encadrantes pour la superficie supérieure
        let distanceSupInf = null;
        let distanceSupSup = null;
        
        for (let i = 0; i < plagesDistanceSup.length - 1; i++) {
            if (distance >= plagesDistanceSup[i] && distance <= plagesDistanceSup[i + 1]) {
                distanceSupInf = plagesDistanceSup[i];
                distanceSupSup = plagesDistanceSup[i + 1];
                break;
            }
        }
        
        // Cas limites pour la distance (superficie supérieure)
        if (distanceSupInf === null) {
            if (distance < plagesDistanceSup[0]) {
                distanceSupInf = plagesDistanceSup[0];
                distanceSupSup = plagesDistanceSup[0];
            } else {
                distanceSupInf = plagesDistanceSup[plagesDistanceSup.length - 1];
                distanceSupSup = plagesDistanceSup[plagesDistanceSup.length - 1];
            }
        }
        
        // Obtenir les pourcentages pour les 4 points de référence
        const pourcentageInfInf = tableauReference[superficieInf][distanceInfInf];
        const pourcentageInfSup = tableauReference[superficieInf][distanceInfSup];
        const pourcentageSupInf = tableauReference[superficieSup][distanceSupInf];
        const pourcentageSupSup = tableauReference[superficieSup][distanceSupSup];
        
        // Première interpolation: pour la distance à chaque superficie
        let pourcentageDistanceInf;
        if (distanceInfInf === distanceInfSup) {
            pourcentageDistanceInf = pourcentageInfInf;
        } else {
            pourcentageDistanceInf = pourcentageInfInf + 
                ((distance - distanceInfInf) / (distanceInfSup - distanceInfInf)) * 
                (pourcentageInfSup - pourcentageInfInf);
        }
        
        let pourcentageDistanceSup;
        if (distanceSupInf === distanceSupSup) {
            pourcentageDistanceSup = pourcentageSupInf;
        } else {
            pourcentageDistanceSup = pourcentageSupInf + 
                ((distance - distanceSupInf) / (distanceSupSup - distanceSupInf)) * 
                (pourcentageSupSup - pourcentageSupInf);
        }
        
        // Deuxième interpolation: pour la superficie
        let pourcentageFinal;
        if (superficieInf === superficieSup) {
            pourcentageFinal = pourcentageDistanceInf;
        } else {
            pourcentageFinal = pourcentageDistanceInf + 
                ((surface - superficieInf) / (superficieSup - superficieInf)) * 
                (pourcentageDistanceSup - pourcentageDistanceInf);
        }
        
        return pourcentageFinal;
    }
    
    /**
     * Obtient les plages de superficie disponibles dans les tableaux B et C
     * @param {Object} tableauReference - Tableau de référence
     * @param {string} categorieRapportLH - Catégorie de rapport L/H
     * @returns {Array<number>} Plages de superficie
     */
    getPlagesSuperficieBC(tableauReference, categorieRapportLH) {
        return Object.keys(tableauReference[categorieRapportLH])
            .map(Number)
            .sort((a, b) => a - b);
    }
    
    /**
     * Obtient les plages de distance disponibles dans les tableaux B et C
     * @param {Object} tableauReference - Tableau de référence
     * @param {string} categorieRapportLH - Catégorie de rapport L/H
     * @param {number} superficie - Superficie de la façade
     * @returns {Array<number>} Plages de distance
     */
    getPlagesDistanceBC(tableauReference, categorieRapportLH, superficie) {
        return Object.keys(tableauReference[categorieRapportLH][superficie])
            .map(Number)
            .sort((a, b) => a - b);
    }
    
    /**
     * Obtient les plages de superficie disponibles dans les tableaux D et E
     * @param {Object} tableauReference - Tableau de référence
     * @returns {Array<number>} Plages de superficie
     */
    getPlagesSuperficieDE(tableauReference) {
        return Object.keys(tableauReference)
            .map(Number)
            .sort((a, b) => a - b);
    }
    
    /**
     * Obtient les plages de distance disponibles dans les tableaux D et E
     * @param {Object} tableauReference - Tableau de référence
     * @param {number} superficie - Superficie de la façade
     * @returns {Array<number>} Plages de distance
     */
    getPlagesDistanceDE(tableauReference, superficie) {
        return Object.keys(tableauReference[superficie])
            .map(Number)
            .sort((a, b) => a - b);
    }
    
    /**
     * Vérifie si une façade est conforme aux exigences du code
     * @param {number} surfaceTotaleFacade - Surface totale de la façade (en m²)
     * @param {number} surfaceBaiesNonProtegees - Surface des baies non protégées (en m²)
     * @param {number} pourcentageMaximalAutorise - Pourcentage maximal autorisé
     * @returns {boolean} true si la façade est conforme, false sinon
     */
    verifierConformiteFacade(surfaceTotaleFacade, surfaceBaiesNonProtegees, pourcentageMaximalAutorise) {
        const pourcentageBaiesNonProtegees = (surfaceBaiesNonProtegees / surfaceTotaleFacade) * 100;
        return pourcentageBaiesNonProtegees <= pourcentageMaximalAutorise;
    }
    
    /**
     * Calcule la superficie maximale de baies non protégées autorisées
     * @param {number} surfaceTotaleFacade - Surface totale de la façade (en m²)
     * @param {number} pourcentageMaximalAutorise - Pourcentage maximal autorisé
     * @returns {number} Superficie maximale de baies non protégées autorisées (en m²)
     */
    calculerSuperficieMaximale(surfaceTotaleFacade, pourcentageMaximalAutorise) {
        return (surfaceTotaleFacade * pourcentageMaximalAutorise) / 100;
    }
}

/**
 * Exemple d'utilisation du calculateur
 */
function exempleUtilisation() {
    // Création d'une instance de la classe
    const calculateur = new CalculateurBaiesNonProtegees();
    
    // Données d'exemple (basées sur le compartiment A du document)
    const largeur = 26.551;
    const hauteur = 10.830;
    const distance = 17.48;
    const surface = 287.55;
    const usage = 'A';    // Gymnase (groupe A division 2)
    const division = 2;
    const protectionGicleurs = false;
    
    // Calcul du pourcentage maximal de baies non protégées autorisées
    const pourcentageMaximal = calculateur.calculerPourcentage(
        largeur, hauteur, distance, usage, division, protectionGicleurs, surface
    );
    
    console.log(`Pourcentage maximal de baies non protégées autorisées: ${pourcentageMaximal.toFixed(2)}%`);
    
    // Calcul de la superficie maximale de baies non protégées autorisées
    const superficieMaximale = calculateur.calculerSuperficieMaximale(surface, pourcentageMaximal);
    console.log(`Superficie maximale de baies non protégées autorisées: ${superficieMaximale.toFixed(2)} m²`);
    
    // Vérification de la conformité de la façade
    const surfaceVitrée = 157.34;
    const estConforme = calculateur.verifierConformiteFacade(surface, surfaceVitrée, pourcentageMaximal);
    
    console.log(`La façade est ${estConforme ? 'conforme' : 'non conforme'} aux exigences du code.`);
}

/**
 * Intégration avec une interface utilisateur HTML
 * Cette fonction peut être appelée après le chargement du document
 */
function integrerAInterface() {
    // Création d'une instance du calculateur
    const calculateur = new CalculateurBaiesNonProtegees();
    
    // Récupération des éléments du formulaire
    const form = document.getElementById('form-calculateur');
    const largeurInput = document.getElementById('largeur');
    const hauteurInput = document.getElementById('hauteur');
    const surfaceInput = document.getElementById('surface');
    const distanceInput = document.getElementById('distance');
    const usageSelect = document.getElementById('usage');
    const divisionSelect = document.getElementById('division');
    const gicleursSelect = document.getElementById('gicleurs');
    const baiesInput = document.getElementById('baies');
    const resultatDiv = document.getElementById('resultats');
    
    // Calcul automatique de la surface lorsque la largeur ou la hauteur change
    function calculerSurface() {
        const largeur = parseFloat(largeurInput.value) || 0;
        const hauteur = parseFloat(hauteurInput.value) || 0;
        
        if (largeur > 0 && hauteur > 0) {
            surfaceInput.value = (largeur * hauteur).toFixed(2);
        }
    }
    
    largeurInput.addEventListener('input', calculerSurface);
    hauteurInput.addEventListener('input', calculerSurface);
    
    // Traitement du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs
        const largeur = parseFloat(largeurInput.value);
        const hauteur = parseFloat(hauteurInput.value);
        const surfaceEntree = parseFloat(surfaceInput.value);
        const distance = parseFloat(distanceInput.value);
        const usage = usageSelect.value;
        const division = parseInt(divisionSelect.value);
        const protectionGicleurs = gicleursSelect.value === 'true';
        const surfaceBaies = parseFloat(baiesInput.value || 0);
        
        // Validation des entrées
        if (!largeur || !hauteur || !distance) {
            alert('Veuillez remplir tous les champs obligatoires (largeur, hauteur et distance limitative).');
            return;
        }
        
        // Calcul de la surface si non fournie ou recalcul si fournie
        const surface = surfaceEntree || (largeur * hauteur);
        
        // Calcul du pourcentage maximal et de la superficie maximale
        const pourcentageMaximal = calculateur.calculerPourcentage(
            largeur, hauteur, distance, usage, division, protectionGicleurs, surface
        );
        
        const superficieMaximale = calculateur.calculerSuperficieMaximale(surface, pourcentageMaximal);
        
        // Vérification de la conformité
        const estConforme = calculateur.verifierConformiteFacade(surface, surfaceBaies, pourcentageMaximal);
        
        // Affichage des résultats
        resultatDiv.innerHTML = `
            <h3>Résultats du calcul</h3>
            <p>Rapport L/H: ${calculateur.determinerCategorieRapportLH(largeur, hauteur)}</p>
            <p>Pourcentage maximal autorisé: <strong>${pourcentageMaximal.toFixed(2)}%</strong></p>
            <p>Superficie maximale autorisée: <strong>${superficieMaximale.toFixed(2)} m²</strong></p>
            <p>Pourcentage de baies actuel: <strong>${((surfaceBaies / surface) * 100).toFixed(2)}%</strong></p>
            <p>Conformité: <strong class="${estConforme ? 'conforme' : 'non-conforme'}">${estConforme ? 'CONFORME' : 'NON CONFORME'}</strong></p>
        `;
        
        resultatDiv.style.display = 'block';
    });
}

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CalculateurBaiesNonProtegees;
}