<template>
  <v-container class="fill-height">
    <v-row>
      <v-col class="fill-height">
        <v-card>
          <v-card-title>Horaires de consultation</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                Lundi
              </v-col>
              <v-col>
                9h à 12h
              </v-col>
              <v-col>
                13h à 18h
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                Mardi
              </v-col>
              <v-col>
                9h à 12h
              </v-col>
              <v-col>
                13h30 à 18h30
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                Jeudi
              </v-col>
              <v-col>
                9h à 12h
              </v-col>
              <v-col>
                13h30 à 17h30
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                Vendredi
              </v-col>
              <v-col>
                9h à 12h
              </v-col>
              <v-col>
                13h à 18h
              </v-col>
            </v-row>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col class="fill-height">
        <v-card>
          <v-card-title>Prendre rendez-vous</v-card-title>
          <v-card-text>
              Le secrétariat est ouvert les lundi, mardi, jeudi et vendredi de 16h30 à 18h30. N'hésitez pas à nous laisser un email ou un message avec votre nom ainsi que le motif de votre appel au:
          </v-card-text>
          <v-card-actions >
            <v-btn variant="outlined" color="primary" dark href="tel:0298022319">
              <v-icon left>mdi-phone</v-icon>
              02 98 02 23 19
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn variant="outlined" color="primary" dark href="mailto:secretaria.abasq.paire@gmail.com">
              <v-icon left>mdi-email</v-icon>
              Envoyer un mail
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-btn variant="outlined">
        Prendre RDV en ligne avec le docteur PAIRE
      </v-btn>
      <v-btn variant="outlined">
        Prendre un RDV en ligne avec le Docteur Abasq
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Adresse</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                 50 rue Raymond Leaustic
              </v-row>
              <v-row>
                29200 Brest
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Omnipratique et Parodontie</v-card-title>
          <v-card-text>
            <v-container>
                La parodontie traite les malmadies des gencives et du parodonte. Elles sont plus connues sous le nom de déchaussement des dents et conduisent à la perte des dents.
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  //
</script>
