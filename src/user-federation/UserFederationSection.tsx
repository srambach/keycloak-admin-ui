import {
  Card,
  CardTitle,
  Gallery,
  GalleryItem,
  PageSection,
  Split,
  SplitItem,
  Text,
  TextContent,
  TextVariants,
} from "@patternfly/react-core";
import { DatabaseIcon } from "@patternfly/react-icons";
import { useTranslation } from "react-i18next";
import React from "react";
import { ViewHeader } from "../components/view-header/ViewHeader";

export const UserFederationSection = () => {
  const { t } = useTranslation("user-federation");
  const linkArgs = {
    title: t("common:learnMore"),
    href: "http://google.com",
  };

  return (
    <>
      <ViewHeader
        titleKey="user-federation:userFederation"
        subKey={"user-federation:descriptionLanding"}
        subKeyLinkProps={linkArgs}
      />
      <PageSection>
        <TextContent>
          <Text component={TextVariants.p}>
            {t("userFederationExplanation")}
          </Text>
          <Text component={TextVariants.p}>{t("getStarted")}</Text>
        </TextContent>
      </PageSection>
      <PageSection isFilled>
        <TextContent>
          <Text component={TextVariants.h2}>{t("providers")}</Text>
        </TextContent>
        <hr className="pf-u-mb-lg" />
        <Gallery hasGutter>
          <GalleryItem>
            <Card>
              <CardTitle>
                <Split hasGutter>
                  <SplitItem>
                    <DatabaseIcon size="lg" />
                  </SplitItem>
                  <SplitItem isFilled>{t("kerberos")}</SplitItem>
                </Split>
              </CardTitle>
            </Card>
          </GalleryItem>
          <GalleryItem>
            <Card>
              <CardTitle>
                <Split hasGutter>
                  <SplitItem>
                    <DatabaseIcon size="lg" />
                  </SplitItem>
                  <SplitItem isFilled>{t("ldap")}</SplitItem>
                </Split>
              </CardTitle>
            </Card>
          </GalleryItem>
        </Gallery>
      </PageSection>
    </>
  );
};
